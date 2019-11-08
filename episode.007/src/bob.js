export default function bob(string) {

	// questions end with a ?
	// questions end with a !
	//if empty string
	//if doesnt contain either
	if (string != null){
	let str = string.split("");
	
	if(str.slice(-1) == "!"){
				return ("Whoa, chill out!")
        }
        
        
	if (str.slice(-1) == "?"){
		return("Sure");
	}

	
	if(string === 'Bob'){
		return("Fine. Be that way!");
	}
	
	
	}

		return("Whatever")
}

