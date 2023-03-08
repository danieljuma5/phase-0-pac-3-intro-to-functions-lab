//adding return value to our return function to solve test looking for a return value
function shout(string) {
  return string.toUpperCase();
}

//Creating a whisper function for our string arguments
function whisper(string) {
  return string.toLowerCase();
}

//console-logging logShout function
function logShout(string) {
  console.log(string.toUpperCase());
}

//Console-logging logWhisper function
function logWhisper(string) {
  console.log(string.toLowerCase());
}

//Defining sayHiToHeadphonedRoommate function
function sayHiToHeadphonedRoommate(string) {
  if (string == string.toLowerCase()) {
    return `I can\'t hear you!`;
  } else if (string == string.toUpperCase()) {
    return `YES INDEED!`;
  } else if (string ===`Let's have dinner together!`) {
    return `I would love to!`;
  }
}