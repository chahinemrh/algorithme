export default function pangram(string) {
    let az =  "abcdefghijklmnopqrstuvwxyz"
    string = string.toLowerCase().replace(/[^a-z]/g,'')
    for (var i = 0; i < 26; i++){
      if (string.indexOf(az[i]) < 0) return false
      else return true
  }
}
