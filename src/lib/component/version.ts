import * as core from '@serverless-devs/core';
import { ICredentials } from '../interface/profile';
import Client from '../client';
import logger from '../../common/logger';
import { promptForConfirmOrDetails, tableShow } from '../utils';
import _ from 'lodash';

interface IProps {
  region: string;
  serviceName: string;
  description?: string;
  version?: string;
  assumeYes?: boolean;
}
interface Publish { serviceName: string; description?: string }
interface Remove { serviceName: string; version: string }
interface RemoveAll { serviceName: string; assumeYes?: boolean }

const VERSION_COMMAND: string[] = ['list', 'publish', 'remove', 'removeAll'];
const VERSION_COMMAND_HELP_KEY = {
  list: 'VersionListInputsArgs',
  publish: 'VersionPublishInputsArgs',
  remove: 'VersionDeleteInputsArgs',
  removeAll: 'VersionDeleteAllInputsArgs',
};

export default class Version {
  static async handlerInputs(inputs) {
    logger.debug(`inputs.props: ${JSON.stringify(inputs.props)}`);

    const parsedArgs: {[key: string]: any} = core.commandParse(inputs, {
      boolean: ['help', 'table', 'y'],
      string: ['region', 'service-name', 'description', 'id'],
      alias: { help: 'h', version: 'id', 'assume-yes': 'y' },
    });

    const parsedData = parsedArgs?.data || {};
    const rawData = parsedData._ || [];
    if (!rawData.length) {
      return { help: true, helpKey: 'VersionInputsArgs' };
    }

    const subCommand = rawData[0];
    logger.debug(`version subCommand: ${subCommand}`);
    if (!VERSION_COMMAND.includes(subCommand)) {
      return {
        help: true,
        helpKey: 'VersionInputsArgs',
        errorMessage: `Does not support ${subCommand} command`,
      };
    }

    if (parsedData.help) {
      return { help: true, helpKey: VERSION_COMMAND_HELP_KEY[subCommand], subCommand };
    }

    const props = inputs.props || {};

    const endProps: IProps = {
      region: parsedData.region || props.region,
      serviceName: parsedData['service-name'] || props.service?.name,
      description: parsedData.description,
      version: parsedData.id,
      assumeYes: parsedData.y,
    };

    if (!endProps.region) {
      throw new Error('Not fount region');
    }
    if (!endProps.serviceName) {
      throw new Error('Not fount serviceName');
    }

    const credentials: ICredentials = inputs.credentials || await core.getCredential(inputs?.project?.access);
    logger.debug(`handler inputs props: ${JSON.stringify(endProps)}`);

    return {
      credentials,
      subCommand,
      props: endProps,
      table: parsedData.table,
    };
  }

  constructor({ region, credentials }: { region: string; credentials: ICredentials }) {
    Client.setFcClient(region, credentials);
  }

  async list({ serviceName }: { serviceName: string }, table?: boolean) {
    logger.info(`Getting listVersions: ${serviceName}`);
    const data = await Client.fcClient.get_all_list_data(`/services/${serviceName}/versions`, 'versions');
    if (table) {
      tableShow(data, ['versionId', 'description', 'createdTime', 'lastModifiedTime']);
    } else {
      return data;
    }
  }

  async publish({ serviceName, description }: Publish) {
    logger.info(`Creating service version: ${serviceName}`);
    const { data } = await Client.fcClient.publishVersion(serviceName, description);
    logger.debug(`publish version: ${JSON.stringify(data)}`);
    return data;
  }

  async remove({ serviceName, version }: Remove) {
    if (!version) {
      throw new Error('Not fount version');
    }
    logger.info(`Removing service version: ${serviceName}.${version}`);
    const res = await Client.fcClient.deleteVersion(serviceName, version);
    logger.debug(`delete version: ${JSON.stringify(res)}`);
  }

  async removeAll({ serviceName, assumeYes }: RemoveAll) {
    const listData = await this.list({ serviceName });
    if (assumeYes) {
      return await this.forDeleteVersion(serviceName, listData);
    }

    if (!_.isEmpty(listData)) {
      tableShow(listData, ['versionId', 'description', 'createdTime', 'lastModifiedTime']);
      const meg = `Version configuration exists under service ${serviceName}, whether to delete all version resources`;
      if (await promptForConfirmOrDetails(meg)) {
        return await this.forDeleteVersion(serviceName, listData);
      }
    }
  }

  private async forDeleteVersion(serviceName: string, listData: any[]) {
    for (const { versionId } of listData) {
      await this.remove({ serviceName, version: versionId });
    }
  }
}