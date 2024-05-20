function sortString(inputString){
    return inputString.split('').sort().join('');
}


$("#sort").click(function(){
    
    const userName = $("#name").val();
    const colorName = $("#color").val();
    const aniName = $("#animal").val();

    userNameSorted = sortString(userName);
    colorNameSorted = sortString(colorName);
    aniNameSorted = sortString(aniName);

    $("#output").append('<p>'  + userNameSorted + '</p>');
    $("#output").append('<p>'  + colorNameSorted + '</p>');
    $("#output").append('<p>'  + aniNameSorted + '</p>');
});

function anagram(inputString) {
    const charArray = inputString.split('')

    for (let i = charArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [charArray[i], charArray[j]] = [charArray[j], charArray[i]];}
        const anagram = charArray.join('');
        return anagram;
}

$("#anagram").click(function(){
    const userName = $("#name").val();
    const colorName = $("#color").val();
    const aniName = $("#animal").val();

    userNameSorted = anagram(userName);
    colorNameSorted = anagram(colorName);
    aniNameSorted = anagram(aniName);

    $("#output").append('<p>'  + userNameSorted + '</p>');
    $("#output").append('<p>'  + colorNameSorted + '</p>');
    $("#output").append('<p>'  + aniNameSorted + '</p>');
});