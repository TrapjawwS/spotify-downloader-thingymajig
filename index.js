import { saveAs } from 'file-saver';
var music = prompt("Please enter a spotify link for a song, album, playlist, or artist. ");

const { exec } = require('child_process');

export const executeCommand = (cmd, successCallback, errorCallback) => {
  exec(cmd, (error, stdout, stderr) => {
    if (error) {
     // console.log(`error: ${error.message}`);
      if (errorCallback) {
        errorCallback(error.message);
      }
      return;
    }
    if (stderr) {
      //console.log(`stderr: ${stderr}`);
      if (errorCallback) {
        errorCallback(stderr);
      }
      return;
    }
    //console.log(`stdout: ${stdout}`);
    if (successCallback) {
      successCallback(stdout);
    }
  });
};

export const getGitBranchCommand = (folder, success, error) => {
    executeCommand(
      `rm -rf music`,
      branch => success(branch),
      errormsg => error(errormsg)
    );
  }; 

  export const getGitBranchCommand = (folder, success, error) => {
    executeCommand(
      `rm -rf music.zip`,
      branch => success(branch),
      errormsg => error(errormsg)
    );
  }; 

  export const getGitBranchCommand = (folder, success, error) => {
    executeCommand(
      `mkdir music`,
      branch => success(branch),
      errormsg => error(errormsg)
    );
  };

export const getGitBranchCommand = (folder, success, error) => {
    executeCommand(
      `spotdl download ` + music,
      branch => success(branch),
      errormsg => error(errormsg)
    );
  }; 

  export const getGitBranchCommand = (folder, success, error) => {
    executeCommand(
      `zip music music`,
      branch => success(branch),
      errormsg => error(errormsg)
    );
  }; 

  export const getGitBranchCommand = (folder, success, error) => {
    executeCommand(
      `zip music music`,
      branch => success(branch),
      errormsg => error(errormsg)
    );
  }; 

