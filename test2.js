Scratch.extensions.register('My Extension', {
  evalBlock: function (code) {
    return eval(code);
  }
});

Scratch.blocks.addBlock('evalBlock', {
  opcode: 'evalBlock',
  blockType: Scratch.BlockType.COMMAND,
  text: 'Javascript [TEXT]',
  arguments: {
    TEXT: {
      type: Scratch.ArgumentType.STRING,
      defaultValue: 'console.log("Hello, world!");',
    },
  },
});