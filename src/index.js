// @flow

import readline from 'readline';
import deasync from 'deasync';

readline.emitKeypressEvents(process.stdin);

process.stdin.setRawMode(true);

let done;

const handler = (str, key) => {
  if (str === 'n') {
    done = true;

    process.stdin.off('keypress', handler);
    process.stdin.pause();
  }

  if (key.ctrl && key.name === 'c') {
    process.exit();
  }
};

export default () => {
  console.log('Press "n" key to advance.');

  done = false;

  process.stdin.on('keypress', handler);
  process.stdin.resume();

  deasync.loopWhile(() => {
    return !done;
  });
};
