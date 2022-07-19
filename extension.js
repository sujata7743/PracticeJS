// Write a JavaScript Program to get the extension of file

const getFileExtension=(str) => str.slice(str.lastIndexOf('.'));
console.log(getFileExtension('extension.js'));
console.log(getFileExtension('index.html'));

//Second approach
function getFileExtension(filename) {
    //get file extension
   // const extension=filename.substring(filename.lastIndexOf('.')+1,filename.length);
   //or
   const extension=filename.split('.').pop();
    return extension;
}
//passing the filename
const displyExtension1=getFileExtension('index.css');
const displyExtension2=getFileExtension('index.txt');
console.log(displyExtension1);
console.log(displyExtension2);



