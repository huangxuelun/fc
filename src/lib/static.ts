export const COMPONENT_HELP_INFO = [
  {
    header: 'fc component',
    content: 'You can use the component to manager and develop your alicloud function computer resources.',
  },
  {
    header: 'Usage',
    content: '$ s <command> <options>',
  },
  {
    header: 'Command List',
    content: [
      { name: 'help', summary: 'Display help information.' },
      { name: 'deploy', summary: 'Deploy serverless application.' },
      { name: 'remove', summary: 'Remove serverless application.' },
      { name: 'local', summary: 'Local debug serverless application.' },
      { name: 'info', summary: 'Get information of alicloud function computer resources.' },
      { name: 'build', summary: 'Build artifacts for your serverless application.' },
      { name: 'sync', summary: 'Sync remote serverless application config/code to local.' },
      { name: 'logs', summary: 'Get the logs of the remote serverless application.' },
      { name: 'metrics', summary: 'Display the metrics of the remote serverless application.' },
      { name: 'nas', summary: 'Manage the file resource in the NAS file system.' },
    ],
  },
  {
    header: 'Global Options',
    optionList: [
      {
        name: 'assumeYes',
        description: 'Assume that the answer to any question which would be asked is yes.',
        alias: 'y',
        type: Boolean,
      },
    ],
  },
  {
    header: 'Examples with Yaml',
    content: [
      '$ fc {bold deploy} --help',
      '$ fc {bold remove} --help',
      '$ fc {bold help}',
    ],
  },
];

export const LOCAL_HELP_INFO = [
  {
    header: 'Local',
    content: 'Run your serverless application locally for quick development & testing.',
  },
  {
    header: 'Usage',
    content: '$ s local <sub-command>',
  },
  {
    header: 'SubCommand List',
    content: [
      { name: 'invoke', summary: 'Local start fc event function, you can get help through [s local invoke -h]' },
      { name: 'start', summary: 'Local invoke fc http function, you can get help through [s local start -h]' },
    ],
  },
];

export const LOGS_HELP_INFO = [
  {
    header: 'Logs',
    content: 'Query the function log. You need to open SLS log service.',
  },
  {
    header: 'Usage',
    content: '$ s logs <options> ',
  },
  {
    header: 'Options',
    optionList: [
      {
        name: 'tail',
        description: 'Continuous log output mode',
        alias: 't',
        defaultOption: false,
        type: Boolean,
      },
      {
        name: 'start-time',
        description: 'Query log start time (Timestamp or time format，like 1611827290000 or 2021-11-11T11:11:12+00:00)',
        alias: 's',
        defaultOption: false,
        type: String,
      },
      {
        name: 'end-time',
        description: 'Query log end time (Timestamp or time format，like 1611827290000 or 2021-11-11T11:11:12+00:00)',
        alias: 'e',
        defaultOption: false,
        type: String,
      },
      {
        name: 'keyword',
        description: 'Keyword query',
        alias: 'k',
        defaultOption: false,
        type: String,
      },
      {
        name: 'request-id',
        description: 'Query according to requestId within the time interval',
        alias: 'r',
        defaultOption: false,
        type: String,
      },
      {
        name: 'type',
        description: 'Log type query, value: failed',
        defaultOption: false,
        type: String,
      },
      {
        name: 'region',
        description: 'Specify the region parameter',
        defaultOption: false,
        type: String,
      },
      {
        name: 'service-name',
        description: 'Specify the service name parameter',
        defaultOption: false,
        type: String,
      },
      {
        name: 'function-name',
        description: 'Specify the function name parameter',
        defaultOption: false,
        type: String,
      },
    ],
  },
  {
    header: 'Global Options',
    optionList: [
      {
        name: 'access',
        description: 'Specify key alias.',
        alias: 'a',
        type: Boolean,
      },
      {
        name: 'help',
        description: 'Display help for command.',
        alias: 'h',
        type: Boolean,
      },
    ],
  },
  {
    header: 'Examples with Yaml',
    content: [
      {
        desc: 'Query logs in the time interval',
        example: '$ s exec -- logs -s 2021-06-07T02:54:00+08:00 -e 2021-06-07T02:54:59+08:00',
      },
      {
        desc: 'Continuous log output mode',
        example: '$ s exec -- logs -t',
      },
    ],
  },
  {
    header: 'Examples with CLI',
    content: [
      {
        example: '$ s cli fc logs --region cn-hangzhou --service-name myService --function-name myFunction -t',
      },
    ],
  },
];

export const NAS_HELP_INFO = [
  {
    header: 'Nas',
    content: 'Upload and download files for NAS service.',
  },
  {
    header: 'Usage',
    content: '$ s exec -- nas <sub-command>',
  },
  {
    header: 'SubCommand',
    content: [
      {
        desc: 'download',
        example: 'Download resources, you can get help through [s nas download -h]',
      },
      {
        desc: 'upload',
        example: 'Upload resources, you can get help through [s nas upload -h]',
      },
      {
        desc: 'command',
        example: 'Execute relevant instructions, you can get help through [s nas command -h]',
      },
    ],
  },
];

const UPLOADHELP = [
  {
    header: 'nas Upload',
    content: 'Upload resources.',
  },
  {
    header: 'Usage',
    content: [
      { example: '$ s exec -- nas upload <option>' },
    ],
  },
  {
    header: 'Options',
    optionList: [
      {
        name: 'recursive',
        description: 'Iterate to copy folder content',
        alias: 'r',
        defaultOption: false,
        type: Boolean,
      },
      {
        name: 'no-clobber',
        description: 'Do not override existing files',
        alias: 'n',
        defaultOption: false,
        type: Boolean,
      },
    ],
  },
  {
    header: 'Global Options',
    optionList: [
      {
        name: 'help',
        description: 'Upload help for command',
        alias: 'h',
        type: Boolean,
      },
    ],
  },
  {
    header: 'Examples with Yaml',
    content: [
      {
        example: '$ s exec -- nas upload /home/usr/demo.file nas://<fc_dir>',
      },
    ],
  },
  {
    header: 'Examples',
    content: [
      {
        example: '$ s exec -- upload /home/usr/demo.file nas://<fc_dir>',
      },
    ],
  },
];

const DOWNLOADHELP = [
  {
    header: 'Nas Download',
    content: 'Download resources.',
  },
  {
    header: 'Usage',
    content: [
      { example: '$ s exec -- nas download <option>' },
    ],
  },
  {
    header: 'Options',
    optionList: [
      {
        name: 'recursive',
        description: 'Iterate to copy folder content',
        alias: 'r',
        defaultOption: false,
        type: Boolean,
      },
      {
        name: 'no-clobber',
        description: 'Do not override existing files',
        alias: 'n',
        defaultOption: false,
        type: Boolean,
      },
    ],
  },
  {
    header: 'Global Options',
    optionList: [
      {
        name: 'help',
        description: 'Download help for command',
        alias: 'h',
        type: Boolean,
      },
    ],
  },
  {
    header: 'Examples with Yaml',
    content: [
      {
        example: '$ s exec -- nas download nas://<fc_dir> /home/usr/demo',
      },
    ],
  },
];

const COMMANDHELP = [
  {
    header: 'nas Command',
    content: 'Operation instruction.',
  },
  {
    header: 'Usage',
    content: [
      { example: '$ s exec -- nas command <option>' },
    ],
  },
  {
    header: 'Global Options',
    optionList: [
      {
        name: 'help',
        description: 'Download help for command',
        alias: 'h',
        type: Boolean,
      },
    ],
  },
  {
    header: 'Examples',
    content: [
      {
        example: '$ s exec -- nas command ls nas:///<nas_dir>',
      },
    ],
  },
];

export const NAS_SUB_COMMAND_HELP_INFO = {
  download: DOWNLOADHELP,
  upload: UPLOADHELP,
  command: COMMANDHELP,
  // fc 组件不推的几个指令，但是支持
  remove: [],
  deploy: [],
  ls: [],
  cp: [],
  rm: [],
};

export const INVOKE_HELP_INFO = [
  {
    header: 'Invoke',
    content: 'Invoke/trigger online functions.',
  },
  {
    header: 'Usage',
    content: '$ s invoke <options>',
  },
  {
    header: 'Options',
    optionList: [
      {
        name: 'invocation-type',
        description: 'Invocation type: optional value "async"|"sync", default value "sync" (default: "sync")',
        alias: 't',
        type: String,
      },
      {
        name: 'event',
        description: 'Event data (strings) passed to the function during invocation (default: "").Http function format refers to [https://github.com/devsapp/fc-remote-invoke#特别说明]',
        alias: 'e',
        type: String,
      },
      {
        name: 'event-file',
        description: 'Event funtion: A file containing event data passed to the function during invoke. Http function: A file containing http request options sent to http trigger. Format refers to [https://github.com/devsapp/fc-remote-invoke#特别说明]',
        alias: 'f',
        type: String,
      },
      {
        name: 'event-stdin',
        description: 'Read from standard input, to support script pipeline.Http function format refers to [https://github.com/devsapp/fc-remote-invoke#特别说明]',
        alias: 's',
        type: Boolean,
      },
      {
        name: 'region',
        description: 'Specify region in cli mode',
        type: String,
      },
      {
        name: 'service-name',
        description: 'Specify service name in cli mode',
        type: String,
      },
      {
        name: 'function-name',
        description: 'Specify function name in cli mode',
        type: String,
      },
    ],
  },
  {
    header: 'Global Options',
    optionList: [
      {
        name: 'access',
        description: 'Specify key alias.',
        alias: 'a',
        type: Boolean,
      },
      {
        name: 'help',
        description: 'fc-remote-invoke help for command.',
        alias: 'h',
        type: Boolean,
      },
    ],
  },
  {
    header: 'Examples with Yaml',
    content: [
      '$ s invoke',
      '$ s <ProjectName> invoke',
      '$ s exec -- invoke --invocation-type sync --event <payload>',
      '$ s exec -- invoke --event-file <file-path>',
      '$ s exec -- invoke --event-stdin',
    ],
  },
  {
    header: 'Examples with CLI',
    content: [
      {
        example: '$ s cli fc invoke --region * --service-name * --function-name * --event <payload>',
      },
      {
        example: '$ s cli fc invoke --region * --service-name * --function-name * --event-file <file-path>',
      },
      {
        example: '$ s cli fc invoke --region * --service-name * --function-name * --event-stdin',
      },
      {
        example: '\nYou also can refer to the usage of fc-api and execute [s cli fc-api -h] for help.   $ s cli fc-api invokeFunction -h',
      },
    ],
  },
];

export const LOCAL_INVOKE_HELP_INFO = [
  {
    header: 'Local Invoke',
    content: 'Local invoke fc event function',
  },
  {
    header: 'Usage',
    content: '$ s local invoke <options>',
  },
  {
    header: 'Options',
    optionList: [
      {
        name: 'event',
        typeLabel: '{underline <event>}',
        description: 'Support Event data(strings) or a file containing event data passed to the function during invocation.',
        alias: 'e',
        type: String,
      },
      {
        name: 'event-file',
        typeLabel: '{underline <path>}',
        description: 'A file containing event data passed to the function during invoke.',
        alias: 'f',
        type: String,
      },
      {
        name: 'event-stdin',
        description: 'Read from standard input, to support script pipeline.',
        alias: 's',
        type: Boolean,
      },
      {
        name: 'mode',
        typeLabel: '{underline <mode>}',
        description: `Invoke mode, including api, server and normal:
          - api: start api server for invokeFunction api invoking.
          - server: start server container for invoking function in the other terminal repeatedly.
          - normal: default mode, invoke event function and then close the container.`,
        alias: 'm',
        type: String,
      },
      {
        name: 'config',
        typeLabel: '{underline ide/debugger}',
        description: 'Select which IDE to use when debugging and output related debug config tips for the IDE. Options：\'vscode\', \'pycharm\'.',
        alias: 'c',
        type: String,
      },
      {
        name: 'debug-port',
        typeLabel: '{underline <port>}',
        description: 'Specify the sandboxed container starting in debug mode, and exposing this port on localhos.',
        alias: 'd',
        type: Number,
      },
      {
        name: 'debug-args',
        typeLabel: '{underline <debugArgs>}',
        description: 'Additional parameters that will be passed to the debugger',
        type: String,
      },
      {
        name: 'debugger-path',
        typeLabel: '{underline <debuggerPath>}',
        description: 'The path of the debugger on the host',
        type: String,
      },
      {
        name: 'tmp-dir',
        typeLabel: '{underline <tmpDir>}',
        description: 'The temp directory mounted to /tmp , default to \'./.s/tmp/invoke/serviceName/functionName/\'',
        type: String,
      },
    ],
  },
  {
    header: 'Global Options',
    optionList: [
      {
        name: 'help',
        description: 'Display help for command.',
        alias: 'h',
        type: Boolean,
      },
    ],
  },
  {
    header: 'Examples with Yaml',
    content: [
      '$ s {bold local invoke} [{bold --debug-port} {underline 9000}] [{bold --config} {underline vscode}]',
      '$ s exec -- {bold local invoke} [{bold --debug-port} {underline 9000}] [{bold --config} {underline vscode}]',
    ],
  },
];

export const LOCAL_START_HELP_INFO = [
  {
    header: 'Local Start',
    content: 'Local invoke fc http function',
  },
  {
    header: 'Usage for',
    content: '$ s local start <options>',
  },
  {
    header: 'Options',
    optionList: [
      {
        name: 'config',
        typeLabel: '{underline ide/debugger}',
        description: 'Select which IDE to use when debugging and output related debug config tips for the IDE. Options：\'vscode\', \'pycharm\'.',
        alias: 'c',
        type: String,
      },
      {
        name: 'debug-port',
        typeLabel: '{underline <port>}',
        description: 'Specify the sandboxed container starting in debug mode, and exposing this port on localhos.',
        alias: 'd',
        type: Number,
      },
      {
        name: 'debug-args',
        typeLabel: '{underline <debugArgs>}',
        description: 'Additional parameters that will be passed to the debugger',
        type: String,
      },
      {
        name: 'debugger-path',
        typeLabel: '{underline <debuggerPath>}',
        description: 'The path of the debugger on the host',
        type: String,
      },
      {
        name: 'tmp-dir',
        typeLabel: '{underline <tmpDir>}',
        description: 'The temp directory mounted to /tmp , default to \'./.s/tmp/invoke/serviceName/functionName/\'',
        type: String,
      },
    ],
  },
  {
    header: 'Global Options',
    optionList: [
      {
        name: 'help',
        description: 'Display help for command.',
        alias: 'h',
        type: Boolean,
      },
    ],
  },
  {
    header: 'Examples with Yaml',
    content: [
      '$ s {bold local start} [{bold --debug-port} {underline 9000}] [{bold --config} {underline vscode}]',
      '$ s exec -- {bold local start} [{bold --debug-port} {underline 9000}] [{bold --config} {underline vscode}]',
    ],
  },
];