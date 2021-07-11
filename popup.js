// Read hmtl elements
const timestamp = document.getElementById('timestamp');
const resultTimeStampId = document.getElementById('resultTimeStampId');
const objectid = document.getElementById('objectid');
const resultObjectId = document.getElementById('resultObjectId');

// Read button elements
const buttonFromTimestampToDate = document.getElementById('fromTimestampToDate');
const buttonFromStrToTimestamp = document.getElementById('fromStrToTimestamp');
const buttonFromObjectToDate = document.getElementById('fromObjectToDate');
const buttonPlaceNow = document.getElementById('placeNow');
const buttonClearInputs = document.getElementById('clearInputs');

// Assign clicks
buttonFromObjectToDate.onclick = fromObjectToDate;
buttonFromTimestampToDate.onclick = fromTimestampToDate;
buttonFromStrToTimestamp.onclick = fromStrToTimestamp;
buttonPlaceNow.onclick = placeNow;
buttonClearInputs.onclick = clearInputs;

// Methods
function fromObjectToDate() {
  const date = dateFromObjectId(objectid.value);
  resultObjectId.value = date;
}

function fromTimestampToDate() {
  const date = dateFromTimestamp(timestamp.value);
  resultTimeStampId.value = date;
}

function fromStrToTimestamp() {
  const date = new Date(resultTimeStampId.value);
  timestamp.value = date.getTime();
}

function placeNow() {
  resultTimeStampId.value = new Date().toUTCString();
  fromStrToTimestamp();
}

function clearInputs() {
  objectid.value = "";
  resultObjectId.value = "";
  timestamp.value = "";
  resultTimeStampId.value = "";
}

function dateFromObjectId(objectId) {
	return new Date(parseInt(objectId.substring(0, 8), 16) * 1000).toUTCString();
}

function dateFromTimestamp(timestamp) {

  if( timestamp.length === 10 ) {
    timestamp *= 1000;
  }

	return new Date(parseInt(timestamp)).toUTCString();
}

