function splitStringUsingRegex(input:string): string[] {
    const characters: string[] = [];
    const regex = /[\s\S]/g;

    let match;

    while((match = regex.exec(input)) !== null){
        characters.push(match[0])
    }

    return characters
    
}

export default splitStringUsingRegex;