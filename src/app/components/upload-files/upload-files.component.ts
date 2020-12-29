import { Component, OnInit } from '@angular/core';
import { UploadFileService } from 'src/app/services/upload-file.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-upload-files',
  templateUrl: './upload-files.component.html',
  styleUrls: ['./upload-files.component.css']
})
export class UploadFilesComponent implements OnInit {

  selectedFiles: FileList;
  currentFile: File;
  progress = 0;
  message = '';
  blob: any;
  link: any;
formData: FormData = new FormData();

  files: Observable<any>;

  constructor(private uploadService: UploadFileService) { }
  selectFile(event) {
  this.selectedFiles = event.target.files;
}

saveFile() {

  this.progress = 0;

  this.currentFile = this.selectedFiles.item(0);
 this.formData.append('files', this.currentFile);
  console.log(this.formData);

this.uploadService.saveFile(this.formData).subscribe(
  event => {
       this.files = this.uploadService.getFiles();
       console.log(this.files);
   },
    err => {
      this.progress = 0;
      this.message = 'Could not upload the file!';
      this.currentFile = undefined;
    });

  this.selectedFiles = undefined;
}

ngOnInit() {
  this.files = this.uploadService.getFiles();
}
download(id): void {
        this.uploadService.downloadFile(id).subscribe(
            data => {
                this.blob = new Blob([data]);
                const downloadURL = window.URL.createObjectURL(data);
                this.link = document.createElement('a');
                this.link.href = downloadURL;
                window.open(downloadURL);
            }
        );
      

    }
}
