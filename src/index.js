// @flow

import readline from 'readline';
import deasync from 'deasync';

readline.emitKeypressEvents(process.stdin);

// $FlowFixMe
process.stdin.setRawMode(true);

let done;

const handler = (str, key) => {
  if (str === 'c') {
    done = true;

    process.stdin.off('keypress', handler);
    process.stdin.pause();
  }

  if (key.ctrl && key.name === 'c') {
    // eslint-disable-next-line no-process-exit
    process.exit();
  }
};

export default () => {
  // eslint-disable-next-line no-console
  console.log('Press "c" key to continue execution.');

  done = false;

  process.stdin.on('keypress', handler);
  process.stdin.resume();

  deasync.loopWhile(() => {
    return !done;
  });
};
