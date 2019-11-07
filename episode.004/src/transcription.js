export default function transcription(sequence) {
    var change= "";
    for (let i=0; i< sequence.length; i++){
        if (sequence[i]==='A'){
            change += 'U'
      }
        else if(sequence[i]==='G'){
            change += 'C'
      }
        else if(sequence[i]==='C'){
            change += 'G'
      }
        else if(sequence[i]==='T'){
            change += 'A'
      }
    }
      
      return change;

      if(sequence[i]== undefined){
    throw new Error('oblig');
}
}
