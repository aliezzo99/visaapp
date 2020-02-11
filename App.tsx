import React from 'react';
import { StyleSheet, Text, View, Button, Alert, Image } from 'react-native';
import FileViewer from 'react-native-file-viewer';
import RNFS from 'react-native-fs';
import RNFSManager from 'react-native-fs'



export default function App() {
  const handlePressUrl = () => {
    const url = 'https://www.make-it-in-germany.com/fileadmin/MiiG_Fachkraefte/PDF_s/Fachkraefte/Visum/Antragsformular_fuer_nationales_Visum_Englisch.pdf';
    const localFile = `${RNFS.DocumentDirectoryPath}/temporaryfile.pdf`;
    const options = {
      fromUrl: url,
      toFile: localFile
    };
    RNFS.downloadFile(options).promise
      .then(() => FileViewer.open(localFile))
      .then(() => {
        // success
      })
      .catch(error => {
        // error
      });
  }

  const handlePressOffline = () => {  
    const file = './media/visaPDF.pdf';
    const dest = `${RNFS.DocumentDirectoryPath}/${file}`;
    console.log(dest)
     /* FileViewer.open(dest)
        .then(() => {
          console.log('success')
        })
        .catch(error => {
          console.log('fail: ' + error)
        });*/
   /* 
    RNFSManager.copyFileAssets(file, dest).then(() => void 0).catch(error => { console.log('fail: ' + error) });
    FileViewer.open(file).then(() => void 0).catch(error => { console.log('fail2: ' + error) });
    
    
    RNFS.copyFileAssets(file, dest)
      .then(() => FileViewer.open(dest))
      .then(() => {
        console.log('success')
      })
      .catch(error => {
        console.log('fail: '+ error)
      });
      */
  }
 
  return (
    <View style={styles.container}>
      <Text>Download your pdf!</Text>
      <Button
        onPress={handlePressUrl}
        title="PDF (online)"
        color="red"
      />
      <Image source={require('./media/cat.png')} />
      <Button
        onPress={handlePressOffline}
        title="PDF (offline)"
        color="blue"
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
