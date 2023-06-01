class MiscExtension {
  getInfo() {
    return {
      id: 'miscextension',
      name: 'Misc Extension',
      color1: '#918ae6',
      color2: '#817acc',
      color3: '#6863a6',
      blocks: [
        {
          opcode: 'evalBlock',
          blockType: Scratch.BlockType.REPORTER,
          text: 'evaluate [EVALINPUT]',
          arguments: {
            EVALINPUT: {
              type: Scratch.ArgumentType.STRING,
            }
          }
        },
        {
          opcode: 'maxBlock',
          blockType: Scratch.BlockType.REPORTER,
          text: 'max [ONE] [TWO]',
          arguments: {
            ONE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 1
            },
            TWO: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 2
            }
          }
        },
        {
          opcode: 'minBlock',
          blockType: Scratch.BlockType.REPORTER,
          text: 'min [ONE] [TWO]',
          arguments: {
            ONE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 1
            },
            TWO: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 2
            }
          }
        },
        {
          opcode: 'addStringBlock',
          blockType: Scratch.BlockType.REPORTER,
          text: 'add [ADDSTRING] to [OGSTRING] at [INDEX] buffer [BUFFER]',
          arguments: {
            ADDSTRING: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: "apple"
            },
            OGSTRING: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: "banana"
            },
            INDEX: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 2
            },
            BUFFER: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: "#"
            }
          }
        },
        {
          opcode: 'removeBlock',
          blockType: Scratch.BlockType.REPORTER,
          text: 'remove from [INDEXSTART] to [INDEXEND] in [TEXT]',
          arguments: {
            INDEXSTART: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 2
            },
            INDEXEND: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 3
            },
            TEXT: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: "apple"
            }
          }
        },
        {
          opcode: 'replaceBlock',
          blockType: Scratch.BlockType.REPORTER,
          text: 'replace [STRING] at [INDEX] in [TEXT] buffer [BUFFER]',
          arguments: {
            STRING: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: "scratchers!"
            },
            INDEX: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 7
            },
            TEXT: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: "Hello World!"
            },
            BUFFER: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: "#"
            }
          }
        }
      ]
    };
  }
  evalBlock({ EVALINPUT }) {
    return eval(EVALINPUT);
  }
  maxBlock(args) {
    var onevar = args.ONE;
    var twovar = args.TWO;
    if (typeof args.ONE === 'string') {
      onevar = args.ONE.length;
    }
    if (typeof args.TWO === 'string') {
      twovar = args.TWO.length;
    }
    if (onevar > twovar) {
      return args.ONE;
    } else {
      return args.TWO;
    }
  }
  minBlock(args) {
    var onevar = args.ONE;
    var twovar = args.TWO;
    if (typeof args.ONE === 'string') {
      onevar = args.ONE.length;
    }
    if (typeof args.TWO === 'string') {
      twovar = args.TWO.length;
    }
    if (onevar < twovar) {
      return args.ONE;
    } else {
      return args.TWO;
    }
  }
  addStringBlock(args) {
    if (args.INDEX > args.OGSTRING.length) {
      buffer = args.BUFFER.repeat(args.INDEX - args.OGSTRING.length)
      args.OGSTRING += buffer;
    } else if (args.INDEX < 0) {
      buffer = args.BUFFER.repeat(args.INDEX * -1)
      args.OGSTRING = buffer + args.OGSTRING;
      args.INDEX = 0;
    }
    var out = args.OGSTRING.substring(0, args.INDEX) + args.ADDSTRING + args.OGSTRING.substring(args.INDEX);
    return out;
  }
  removeBlock(args) {
    var startIndex = args.INDEXSTART - 1;
    var endIndex = args.INDEXEND - 1;
    if (startIndex < 0) {
      startIndex = 0;
    }
    if (endIndex >= args.TEXT.length) {
      endIndex = args.TEXT.length - 1;
    }
    if (startIndex > endIndex) {
      return args.TEXT;
    }
    var out = args.TEXT.substring(0, startIndex) + args.TEXT.substring(endIndex + 1);
    return out;
  }
  replaceBlock(args) {
    var replaceString = args.STRING;
    var index = Math.max(args.INDEX - 1, 0);
    if (index > args.TEXT.length) {
      index = args.TEXT.length;
    }
    var buffer1 = args.BUFFER.repeat(Math.max((args.INDEX - 1 - args.TEXT.length), 0));
    var buffer2 = args.BUFFER.repeat(Math.max(((args.INDEX - 1 + args.STRING.length) * -1), 0));
    var out = args.TEXT.substring(0, index) + buffer1 + args.STRING + buffer2 + args.TEXT.substring(args.INDEX - 1 + args.STRING.length);
    return out;
  }
}
Scratch.extensions.register(new MiscExtension());
