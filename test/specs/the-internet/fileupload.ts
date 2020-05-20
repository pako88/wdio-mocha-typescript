/* eslint-disable @typescript-eslint/no-var-requires */
import Upload from 'src/the-internet/upload.page';

const path = require('path');

const filePath = path.join(__dirname, 'fileupload.ts');

describe('File Upload', () => {
    it('should work', () => {
        Upload.open();
        const remoteFilePath = browser.uploadFile(filePath);
        Upload.fileUploadInput.setValue(remoteFilePath);
        Upload.submitButton.click();
        expect(Upload.uploadedFiles).toHaveTextContaining('fileupload.ts');
    });
});
