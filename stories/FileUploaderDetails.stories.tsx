import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import {
  FileUploader,
  FileUploaderDetails,
  FileUploaderDetailsProps,
  FileUploadActions,
  eventManagers,
} from '../src';

let files = {};
let eventManager = eventManagers[0];

const meta: Meta = {
  title: 'FileUploaderDetails',
  component: FileUploaderDetails,
};

export default meta;

function uploadStart({ files: startedFiles }) {
  startedFiles.forEach(file => {
    files[file.fileId] = file;
    makeProgress(file.fileId);
  });
}

function cancelUpload({ files: canceledFiles }) {
  canceledFiles.forEach(file => {
    file.canceled = true;
    files[file.fileId] = file;
    eventManager.emit(FileUploadActions.uploadProgress, { files: [file] });
  });
}

function makeProgress(id) {
  const file = files[id];

  if (file) {
    const uploaderId = file.uploaderId;
    const timeout = (Math.floor(Math.random() * Math.floor(3)) + 1) * 1000;
    const currentProgress = file.progress || 0;

    if (currentProgress < 100 && !file.canceled && !file.error) {
      file.progress = Math.min(
        currentProgress + (Math.floor(Math.random() * 10) + 11),
        100
      );
      eventManager.emit(FileUploadActions.uploadProgress, { files: [file] });

      if (file.progress < 100) {
        setTimeout(() => makeProgress(id), timeout);
      } else {
        eventManager.emit(FileUploadActions.uploadSuccess, { files: [file] });
      }
    }

    files[file.fileId] = file;
  }
}

function getErrorLabel(error) {
  switch (error) {
    case 'upload_204':
      return 'Localized message for error 204';
    default:
      return `No localization for`;
  }
}

function onClose() {
  files = {};
}

const Template: Story<FileUploaderDetailsProps> = args => (
  <>
    <h1>First upload component</h1>
    <FileUploaderDetails
      events={eventManager}
      onUpload={uploadStart}
      onCancel={cancelUpload}
      onClose={onClose}
      errorTableUploadLabel={getErrorLabel}
    />
    <FileUploader
      multiple
      onChange={e => console.log('Files updated in first component', e)}
    >
      Add File(s)
    </FileUploader>
    <h1>Second upload component</h1>
    <FileUploader
      multiple
      onChange={e => console.log('Files updated in second component', e)}
    >
      Add File(s)
    </FileUploader>
  </>
);

export const Default = Template.bind({});

Default.args = {};
