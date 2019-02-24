// @flow

import readline from 'readline';
import deasync from 'deasync';

readline.emitKeypressEvents(process.stdin);

let done = false;

let eventHandler;

const handler = (str, key) => {
  console.log({
    str, key
  });

  if (str === 'n') {
    done = true;

    eventHandler.unref();

    process.stdin.setRawMode(false);
  }

  if (key.ctrl && key.name === 'c') {
    process.exit();
  }
};

eventHandler = process.stdin.on('keypress', handler);

export default () => {
  process.stdin.setRawMode(true);

  deasync.loopWhile(() => {
    return !done;
  });
};
