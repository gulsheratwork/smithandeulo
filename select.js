// chat-widget.js

// Load styles dynamically
const style = document.createElement('style');
style.innerHTML = `#monthsRange {
    width: 65%;
}

#situation-select {
      padding: 10px;
    margin-bottom: 10px;
    padding-left: 15px;
    padding-right: 15px;
    border: 2px solid #e6b23d;
    font-weight: 500;
    font-family: 'Poppins';
    border-radius: 10px;
    width: 100%;
}

.input-text-field {
    width: 93%;
    padding: 10px;
    margin-bottom: 10px;
    border-color: #e6b23d;
    border-radius: 10px;
    border: none;
    border: 1px solid #e6b23d;
}

/* Container for the entire welcome message section */
.welcome-message-container {
    position: absolute;
    bottom: 20px; /* Adjust this value as needed to control how close it is to the bottom */
    left: 0;
    width: 100%;
    text-align: center;
    padding: 10px; /* Adds some padding around the message */
    box-sizing: border-box;
  }
  
  /* Styling for the welcome message text */
  .welcome-message {
    font-family: 'Poppins', sans-serif;
    font-size: 16px; /* Adjust font size as needed */
    color: #ffffff; /* Set color for text */
    background: rgba(0, 0, 0, 0.6); /* Adds a semi-transparent background */
    padding: 10px;
    border-radius: 10px;
    display: inline-block;
  }
  
  /* Button styling */
  .welcome-button {
    margin-top: 10px; /* Space between message and button */
    padding: 10px 20px;
    font-size: 14px;
    color: #e6b23d;
    background-color: #ffffff;
    border: 2px solid #e6b23d;
    border-radius: 20px;
    cursor: pointer;
    font-family: 'Poppins', sans-serif;
  }
  
  /* Ensuring the container is at the bottom */
  .video-container {
    position: relative; /* Positioning context for absolute positioning */
  }
  
  .body {
    font-family: 'poppins' !important;
    line-height: 1.5 !important;
  }
  
  .text-launcher {
    margin-top: 30px !important;
  }
  
  .loading-border {
    left: 30px !important;
  }
  
  .submitt-icon {
    text-align: left;
    background-color: hsla(0, 0%, 100%, 0.85);
    border: 2px solid #e6b23d;
    padding: 9px 14px;
    font-size: 16px;
    cursor: pointer;
    border-radius: 20px;
    margin-bottom: 10px;
    width: fit-content;
    box-sizing: border-box;
    font-family: 'poppins' !important;
    display: flex !important;
  }
  
  .submitt-icon span {
    width: 20px; height: 20px; border: 2px solid #498FE1; border-radius: 50%; display: inline-block; margin-right: 10px;
  }
  
  .chat-container {
    position: fixed;
    bottom: 430px;
    right: -50px;
    width: 400px;
    z-index: 2000;
    display: flex;
    font-family: 'poppins' !important;
    display: flex;
    top: 50% !important;
    right: 0 !important;
    transform: translateY(-50%) !important;
    z-index: 1000 !important;
    width: 365px !important;
    line-height: 1.5 !important;
  }
  
  @media only screen and (max-width: 480px) {
    .chat-container {
        top: 80% !important;
    }
  
    .chat-widget {
        margin-top: -170px !important;
    }
  }
  
  .wec-whit {
    color: black !important;
    margin-bottom: 15px;
    margin-top: 5px;
  }
  
  .video-thumbnail {
    position: relative;
    width: 110px;
    height: 110px;
    padding: 5px;
    cursor: pointer;
    overflow: hidden;
  }
  
  .video-circle {
    position: relative;
  /* Important for positioning the green            dot */
    width: 100px;
    height: 100px;
    border-radius: 50%;
    overflow: hidden;
    box-shadow: -2px 2px 8px rgba(60, 60, 60, .6);
  }
  
  .online-dot {
    position: absolute;
    bottom: 0px;
  /* Adjust this value based on where you want               the dot */
    right: 20px;
  /* Adjust this value based on where you want               the dot */
    width: 20px;
    height: 20px;
    background-color: #2ECC71;
    border-radius: 50%;
    border: 2px solid white;
  /* Optional: Adds a small white               border around the dot */
  }
  
  #thumbnail-video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .chat-widget {
    display: none;
    height: 600px;
    border: 1px solid #ccc;
    border-radius: 20px;
    background-color: #fff;
    position: fixed;
    bottom: 190px;
    right: 50px;
    z-index: 999;
    overflow: hidden;
    top: 50% !important;
    transform: translateY(-50%) !important;
    width: 350px !important;
    box-shadow: -5px 5px 8px rgba(60, 60, 60, .6);
    border: 1px solid #737373;
    margin-top: 0px !important;
  }
  
  .video-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 600px;
    z-index: -1;
  }
  
  #background-video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: relative;
  }
  
  .chat-header {
    display: flex;
    justify-content: flex-end;
    position: sticky;
    top: 0;
    align-items: center;
    z-index: 3;
    padding: 10px;
  /* margin-top: 10px !important; */
    margin-right: -18px !important;
  }
  
  #refresh-btn,
  #close-btn {
    background-color: transparent;
    border: none;
    font-size: 25px;
    cursor: pointer;
    margin-right: 10px;
  }
  
  #close-btn {
    color: white;
    border-radius: 5px;
    font-size: 16px;
    position: relative;
  }
  
  .chat-content {
    position: relative;
    z-index: 1;
  /* padding: 20px; */
    color: rgb(0, 0, 0);
    overflow-y: auto;
    scrollbar-width: thin;
    box-sizing: border-box;
  /* margin-bottom: 10px; */
    padding: 45px 10px 0 15px !important;
    height: 85%;
  }
  
  
  .message {
    font-size: 16px;
    padding: 10px 0px;
    margin-bottom: 8px;
    border-radius: 20px;
    width: fit-content;
    word-wrap: break-word;
    position: relative;
  }
  
  .dropdown-btn {
      background-color: #fff;
      border: 1px solid #ccc;
      border-radius: 8px;
      padding: 10px;
      font-size: 16px;
      cursor: pointer;
      width: 100%;
      text-align: left;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: black !important;
  }
  
  button.dropdown-btn:hover, .dropdown-btn:focus {
      background-color: transparent;
  }
  
  /* Dropdown content styling */
  .dropdown-content {
      display: none;
      background-color: #f9f9f9;
      box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
      border-radius: 8px;
      margin-top: 8px;
      padding: 10px;
      width: 100%;
      max-width: 100%;
  }
  
  .dropdown-content label {
      display: block;
      padding: 8px 0;
      font-size: 16px;
  }
  
  .message.bot-message {
    color: black;
    margin-right: auto;
    text-align: left;
  }
  
  .message ot-message {
    color: rgb(0, 0, 0) !important;
    margin-right: auto;
    text-align: left;
    padding-left: 5px;
  }
  
  .message.user-message {
      overflow: hidden !important;
      max-width: 65% !important;
    background-color: hsla(0, 0%, 100%, 0.85);
    border: 2px solid #e6b23d;
    color: black;
    margin-left: 10px;
    display: flex;
    align-items: center;
    padding: 10px;
  }
  
  .chat-options {
    display: block;
    flex-direction: column;
    max-height: 1100px;
    overflow-y: initial;
  }
  
  .option-btn {
    text-align: left;
    background-color: hsla(0, 0%, 100%, 0.85);
    border: 2px solid #e6b23d;
    padding: 9px 14px;
    font-size: 16px;
    cursor: pointer;
    border-radius: 20px;
    margin-bottom: 10px;
    width: fit-content;
    box-sizing: border-box;
    font-family: 'poppins' !important;
  }
  
  .option-btn:hover {
    background-color: #e6b23d;
    color: white;
  }
  
  
  
  .input-group {
    display: block;
    justify-content: space-between;
    align-items: center;
    position: relative;
    margin-top: 10px;
  }
  
  .input-field {
    width: 90%;
    padding: 10px;
    border-radius: 5px;
    font-size: 14px;
    margin-bottom: 10px;
    margin-right: 0px;
    border: 2px solid #e6b23d !important;
  }
  
  .submit-btn {
    background-color: #28a745;
    color: white;
    border: none;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
    width: 100%;
  }
  
  .submit-btn:hover {
    background-color: #218838;
  }
  
  .submit-icon {
    padding-top: 7px;
    padding-bottom: 7px;
    display: grid;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin-left: 0px;
    width: 100%;
    border-radius: 4px;
    border: navajowhite;
    background: #e6b23d;
  }
  
  .submit-icon img {
    width: 20px !important;
    height: 20px !important;
  }
  
  .move-video-to-corner {
    width: 120px !important;
    height: 214px !important;
    position: relative;
    margin-bottom: 10px;
    z-index: 3;
    transition: all 0.5s ease;
    border-radius: 20px;
    overflow: hidden;
    z-index: -3;
  /* margin-top: -40px; */
  }
  
  .move-video-to-corner #play-pause-btn, pay-pause-btn {
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 3;
  }
  
  #play-pause-btn, pay-pause-btn {
    background-color: transparent;
    border: none;
    font-size: 25px;
    cursor: pointer;
    margin-right: 15px;
  }
  
  .chat-hear-hide {
    display: none !important;
  }
  
  #white-overlay {
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: white;
    z-index: 4;
  }
  
  h1.text-launch {
    font-size: 20px;
  }
  
  img#close-icon {
    width: 30px;
  }
  
  img#refresh-icon,
  img#play-pause-icon,
  img#mute-unmute-icon {
    width: 30px;
  }
  
  .Empty-container {
    height: 332px;
  }
  
  .text-launch {
    box-shadow: -2px 2px 10px rgba(60, 60, 60, .6);
    background-color: #fff !important;
    border-radius: .625rem !important;
    font-size: 15px !important;
    font-weight: 400;
    margin: 0 10px;
    max-width: 300px;
    overflow: visible !important;
    padding: 0px 10px;
    position: relative;
    text-overflow: ellipsis;
    white-space: normal;
    align-items: center;
    cursor: pointer;
    display: flex;
    flex-direction: row-reverse;
    height: 40px;
  }
  
  button#mute-unmute-btn {
    background-color: transparent;
    padding: 0;
    border: none;
    margin-right: auto;
    text-align: left;
  }
  
  .play-option {
    z-index: 3;
    background-color: transparent;
    border: none;
    font-size: 25px;
    cursor: pointer;
    position: relative;
  }
  
  img#play-pause-icon.play-option {
    margin-bottom: -100px;
    margin-left: 40px;
  }
  
  .edit-btn, .undo-btn {
    border: none;
    cursor: pointer;
    margin-left: auto;
    align-items: center;
    display: flex;
    margin-right: 0px;
    text-align: end;
    background-color: #e6b23d;
    border-radius: 20px;
    color: #fff;
    min-width: 50px;
    line-height: 28px;
    height: 28px;
    cursor: pointer;
    display: flex;
    font-size: 12px;
    padding: 0 5px;
    text-align: center;
    justify-content: center;
  }
  
  .edit-btn img, .undo-btn img {
    width: 16px;
    height: 16px;
  }
  
  .typing-indicator {
    display: flex;
    align-items: center;
    margin-left: 10px;
    font-size: 14px;
    color: #999;
  }
  
  .typing-indicator img {
    width: 25px;
    height: 25px;
    margin-right: 5px;
    border-radius: 50px;
  }
  
  .option-btn:hover {
      color: white !important;
  }
  
  select#state-select, .option-select {
    width: 100%;
    padding: 10px 6px;
    margin-bottom: 10px;
    border-radius: 5px;
    font-size: 14px;
  }
  
  .message-container {
    display: flex;
    align-items: center;
    margin-bottom: 0px;
  }
  
  .undop {
      margin-bottom: 0px !important;
      margin-top: 0px !important
  }
  
  .message {
    border-radius: 10px;
    margin-right: 10px;
    max-width: 98%;
    word-wrap: break-word;
  }
  
  .edit-btn, .undo-btn {
    border: none;
    cursor: pointer;
    margin-left: 5px;
  }
  
  .edit-btn img, .undo-btn img {
    width: 16px;
    height: 16px;
    margin-right: 3px;
  }
  
  select.country-code-dropdown {
    margin-right: 7px;
    width: 28%;
    padding-top: 12px;
    padding-bottom: 12px;
    margin-top: -12px;
    border-width: 2px;
    border-color: #e6b23d;
    border-radius: 10px;
  }
  
  .text-launch:after {
    border: 8px solid;
    border-color: transparent transparent transparent #fff !important;
    bottom: auto;
    content: " ";
    height: 0;
    left: auto;
    position: absolute;
    right: -15px;
    top: 50%;
    transform: translateY(-50%);
    width: 0;
  }
  
  .option-select {
      padding: 10px;
      margin-bottom: 10px;
      padding-left: 15px;
      padding-right: 15px;
      border: 2px solid #e6b23d;
      font-weight: 500;
      font-family: 'Poppins';
      border-radius: 10px;
  }
  
  .message.ot-message {
    color: white;
  }
  
  select#find-us-select {
    width: 100%;
  }
  
  span.message-time {
    color: #c3c3c3;
    opacity: .87;
    font-size: 8px;
    margin-top: 9px;
    text-align: center;
    position: absolute;
    padding-left: 6px;
  }
  
  img.user-image {
    width: 25px;
    height: 25px;
    border-radius: 50px;
  }
  
  .input-group {
    display: block;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-top: 10px;
  }
  
  .input-field {
    padding: 10px;
    border-radius: 10px;
    border: 1px solid #ddd;
    width: 45%;
  }
  
  .submit-icon img {
    width: 30px;
    height: 30px;
    cursor: pointer;
  }
  
  .bot-message {
    margin: 15px 0px !important;
  }
  
  .first-name {
    width: 48% !important;
  }
  
  .phone-num {
    width: 69% !important;
    margin-bottom: 10px;
    padding-top: 12px !important;
    padding-bottom: 12px !important;
    margin-right: 0px !important;
    font-size: 16px;
  }
  
  .first-name,
  .phone-num {
    border: 2px solid #e6b23d !important;
  }
  
  #state-select,
  #month-select,
  #year-select,
  #find-us-select {
    border: 2px solid #e6b23d !important;
    border-radius: 8px !important;
  }
  
  #month-select,
  #year-select {
    width: 100% !important;
  }
  
  .country-code-dropdown {
    font-size: 14px !important;
  }
  
  img.user-image {
    margin-top: 5px;
  }
  
  .sticky-header {
    position: absolute;
    top: 15px;
    right: 20px;
    height: 30px;
    z-index: 2;
    justify-content: space-between;
  }
  
  .open-tab-link {
    background-image: url(https://intaker.azureedge.net/new-dashboard/iconsChat/openTabWithShadow.svg);
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: 100%;
    bottom: -38px;
    cursor: pointer;
    display: inline-block;
    height: 42px;
    position: absolute;
    width: 42px;
  /* background-color: black; */
    top: 80px;
    right: 160px;
  }
  
  button.submit-icon:hover {
      background-color: #e6b23d;
  }
  
  .footer {
    display: flex;
    justify-content: center;
  }
  
  .powered-style {
    color: rgba(39, 39, 39, .17);
  }
  
  .img-powered {
    width: 100px;
    height: 20px;
    margin-top: 7px;
    margin-left: 8px;
  }
  
  .loading-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: white;
    display: none;
  /* Hidden by default */
    align-items: center;
    justify-content: center;
    z-index: 4;
  }
  
  .loading-content {
    text-align: center;
  }
  
  .loading-circle {
    position: relative;
    width: 120px;
  /* Adjust size as needed */
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
  }
  
  .loading-border {
    position: absolute;
    top: 0;
    left: 30;
    width: 100%;
    height: 100%;
    border-top: 4px solid #e6b23d;
  /* Color for the loading animation */
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }
  
  .loading-logo {
    width: 70px;
  /* Adjust as needed */
    position: relative;
  /* Ensure logo stays centered */
  left: 30px;
  }
  
  @keyframes spin {
    0% {
        transform: rotate(0deg);
    }
  
    100% {
        transform: rotate(360deg);
    }
  }
  
  
  
  /* Error Message Style */
  .error-message {
    color: red;
    font-size: 14px;
    margin-top: 5px;
    margin-left: 5px;
  }
  
  .footer {
    background-color: white !important;
  }
  
  .progress-bar-container {
    position: absolute;
    top: 0;
  /* Position at the top */
    left: 0;
    width: 100%;
    height: 4px;
  /* Adjust height as desired */
    background-color: rgba(255, 255, 255, 0.3);
  /* Background color for the container */
  }
  
  .progress-bar {
    width: 0;
    height: 100%;
    background-color: #e6b23d;
  /* Progress color */
    transition: width 0.1s linear;
  /* Smooth transition */
  }
  
  .disabled {
    opacity: 0.5;
    pointer-events: none;
    cursor: default;
    display: none !important;
  }
  
  .undo-btn img {
    width: 20px;
    height: 20px;
    margin-top: 8px;
    margin-bottom: 8px;
  }
  
  .undo-btn {
    display: flex;
    margin-top: 10px !important;
  }
  
  .save-btn {
    border: #e6b23d 2px solid;
    border-radius: 10px;
    padding-top: 10px;
    padding-bottom: 10px;
    margin-top: -6px;
    padding-left: 5px;
    padding-right: 5px;
    background: #e6b23d;
    color: white;
  }
  
  .edit-btn {
    margin-right: 5px;
  }
  
  /* Add this CSS to your stylesheet */
  .selected {
    background-color: #e6b23d !important; /* Change this color to whatever you want when selected */
    color: white !important;
  }
  
  input#visitorRange {
    width: 60% !important;
  }
  
  #pay-pause-btn {
    background-color: transparent !important;
    border: none !important;
    display: none;
  }
  
  .empty-container-1 {
    width: 290px;
    height: 40px;
    margin-top: 16px;
    margin-bottom: 22px;
  }
  
  .poweredBox {
    display: inline-flex !important;
    padding-bottom: 10px !important;
  }
  
  .powered-style {
    margin: 0 !important;
    padding-top: 5px !important;
  }
  
  #product-options .option-btn:hover {
      color: #fff !important;
  }
  
  .chat-content {
    height: 84%;
  }
  
  .Empty-container {
      height: 305px;
  }
  
  .bef:hover {
      color: white !important;
      background-color: #e6b23d !important;
  }
  
  .bef {
    color: black !important;
  }
  
  .option-btn {
      color: black !important;
  }
  
  button.undo-btn:hover {
      background-color: #e6b23d;
  }
  
  button#submit-btn:hover {
      background-color: #e6b23d;
  }
  
  .selected {
      color: white !important;
      background-color: #e6b23d !important;
  }
  
  button#refresh-btn {
      margin-right: 0px !important;
  }
  
  div#recommender-options .option-btn {
      color: black !important;
  }
  
  div#recommender-options .option-btn:hover {
      color: white !important;
      background-color: #e6b23d;
  }
  
  #product-options .option-btn:hover {
      background-color: #e6b23d !important;
  }
  
  
  .edit-btn:hover {
      background-color: #e6b23d;
  }
  
  div#live-chat-options .option-btn {
      color: black !important;
  }
  
  #submitVisitorBtn {
      color: black;
  }
  
  #submitVisitorBtn:hover {
      color: black;
  }
  
  
  select {
      display: inline-block !important;
  }
  
  
  
  .country-code-dropdown {
    padding-left: 0px !important;
    padding-right: 0px !important;
  }
  
  #situation-options .option-btn {
      color: black !important;
  }
  
  #situation-options .option-btn:hover {
    color: white !important;
  }
  
  #role-options, #state-options, .option-btn:hover {
    color: white !important;
  }
  
  #live-chat-options .option-btn:hover {
    color: white !important;
  }
  
  #submitVisitorBtn:hover {
    color: white !important;
  }
  .open-chat-button {
    cursor: pointer;
  }
  
  @media (max-width: 430px) {
  .chat-widget{
  right: 0px;
  height: 100vh !important;
  width: 100% !important;
    border-radius: 0px;
    background-color: #fff;
    position: fixed;
    right: auto;
    z-index: 999;
    overflow: hidden;
    box-shadow: -5px 5px 8px rgba(60, 60, 60, .6);
    transform: translateY(0%) !important;
    border: 0px solid #737373;
    bottom: 0 !important;
    top: -1063% !important;
    
  }
  .chat-container{
    top: 0px !important;
        height: 100vh;
        width: 100% !important;
  }
  .video-background {
  height: 100vh !important;
  }
  .chat-content{
  height: 87.5% !important;
  }
  
  .chat-container {
    position: fixed;
    font-family: 'poppins' !important;
    right: 0 !important;
    transform: translateY(-0%) !important;
    z-index: 1000 !important;
    line-height: 1.5 !important;
    top: 85% !important;
    height: 8vh !important;
    left: 0% !important;
  }
  
  .Empty-container {
    height: 80% !important;
  }
  
  .open-tab-link {
    top: 45px;
    right: 20px;
  }
  
  .text-launcher {
    top: 85%;
    position: absolute;
    left: 18%;
  }
  
  #video-container {
    display: block;
    bottom: 0%;
    right: -65%;
  }
  
  #pay-pause-btn {
    left: 16%;
  }
  
  
  }
`;
document.head.appendChild(style);

// Create the chat widget
const chatWidget = document.createElement('div');
chatWidget.innerHTML = `
  
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="chat-container">
        <div class="text-launcher">
            <h1 class="text-launch">👋 How can I help you?</h1>

            <a href="https://chatwidget.automatikpro.com/the-intake-bot" id="icw--avatar-direct-link" class="open-tab-link" target="_blank" rel="noopener"></a>
        </div>

        <div class="video-thumbnail" id="video-container" aria-label="Open chat widget">
            <div class="video-circle">
                <video id="thumbnail-video" autoplay loop muted>
                    <source
                        src="https://storage.googleapis.com/msgsndr/yMsNTtrF5fKA28L0OMsP/media/673052551f6e038775f486b9.mp4"
                        type="video/mp4">
                </video>
            </div>
            <span class="online-dot"></span> <!-- Green online dot -->
        </div>


        <div class="chat-widget" id="chat-widget" aria-hidden="true">
            <div class="video-background" id="video-background">
                <video id="background-video" autoplay loop muted>
                    <source src="https://storage.googleapis.com/msgsndr/yMsNTtrF5fKA28L0OMsP/media/673054c070d7a33a160f2140.mp4" type="video/mp4">
                </video>
                <div class="progress-bar-container">
                    <div class="progress-bar" id="progress-bar"></div>
                </div>
            </div>             
            <div id="loading-overlay" class="loading-overlay">
              <div class="loading-content">
                  <div class="loading-circle">
                      <div class="loading-border"></div>
                      <img src="https://storage.googleapis.com/msgsndr/o8yXFeC9dfjequgTmADj/media/671fca508468fa0f04d8e8b5.png" alt="Loading Logo" class="loading-logo">
                  </div>
                  <p>One moment please...</p>
              </div>
          </div>          
          
            <div class="chat-header" id="chat-header">
                <button id="play-pause-btn" class="control-btn" aria-label="Play/Pause">
                    <img id="play-pause-icon" class="control-btn" aria-label="Play/Pause"
                        src="https://storage.googleapis.com/msgsndr/aJYHtddTenz299BOqzfz/media/66eb060cf9de91b118c93a66.png"
                        alt="Play/Pause Icon">
                </button>

                <button id="mute-unmute-btn" class="control-btn" aria-label="Mute/Unmute">
                    <img id="mute-unmute-icon"
                        src="https://storage.googleapis.com/msgsndr/aJYHtddTenz299BOqzfz/media/66eb0b2cc6a83988da4ff9fd.png"
                        alt="Mute/Unmute Icon">
                </button>

                <button id="refresh-btn" class="control-btn" aria-label="Refresh">
                    <img id="refresh-icon"
                        src="https://storage.googleapis.com/msgsndr/aJYHtddTenz299BOqzfz/media/66eb04eaa256dd3e330dde51.png"
                        alt="Refresh Icon">
                </button>

                <button id="close-btn" aria-label="Close chat widget">
                    <img id="close-icon"
                        src="https://storage.googleapis.com/msgsndr/aJYHtddTenz299BOqzfz/media/66eb0456b8d5546df6dc3dac.png"
                        alt="Close Icon">
                </button>
            </div>

            <div class="chat-content" id="chat-content">
                <div class="Empty-container"></div>
                <div class="message ot-message">Hi 👋🏼 Welcome to Smith & Eulo Law Firm. How can we help you?</div>
                <div class="chat-options">
                    <button class="option-btn bef" onclick="selectOption('Start Chat', true)">Start Chat</button>
                    
                </div>
            </div>
            <div class="footer">
                <div _ngcontent-pna-c93="" class="poweredBox"><p _ngcontent-pna-c93="" class="powered-style">Powered
                        by</p><img src="https://storage.googleapis.com/msgsndr/o8yXFeC9dfjequgTmADj/media/67193d949965e3aa9919d4a9.png" alt="" class="img-powered"></a></div>
            </div>
        </div>
    </div>
    <div id="white-overlay"></div>
    
    <script src="Script.js"></script>
</body>

</html>

`;
document.body.appendChild(chatWidget);
let collectedData = {};
let questionStack = [];

document.getElementById("video-container").addEventListener("click", () => {
    toggleChatWidget(true);
});

document.getElementById("close-btn").addEventListener("click", () => {
    toggleChatWidget(false);
});

function openChatWidget() {
    const chatWidget = document.getElementById("chat-widget"); // Replace "chat-widget" with the actual ID of your chat widget container
    const videoContainer = document.getElementById("video-container"); // Assuming you want to hide the video container when chat opens

    if (chatWidget) {
        chatWidget.style.display = "block";  // Show the chat widget
        chatWidget.setAttribute('aria-hidden', false);
    }

    if (videoContainer) {
        videoContainer.style.display = "none"; // Hide the video container
    }
}

function toggleChatWidget(isOpen) {
    const widget = document.getElementById("chat-widget");
    const videoContainer = document.getElementById("video-container");
    widget.style.display = isOpen ? "block" : "none";
    videoContainer.style.display = isOpen ? "none" : "block";
    widget.setAttribute('aria-hidden', !isOpen);

    // Initialize the video and progress bar when the chat widget opens
    const video = document.getElementById('background-video');
    const progressBar = document.getElementById('progress-bar');
    if (video && progressBar) {
        initializeVideoProgress(video, progressBar);
    }
}

function initializeVideoProgress(video, progressBar) {
    // Remove any existing event listener to prevent duplication
    video.removeEventListener('timeupdate', updateProgressBar);

    // Add event listener for timeupdate to update the progress bar
    video.addEventListener('timeupdate', updateProgressBar);

    function updateProgressBar() {
        const progress = (video.currentTime / video.duration) * 100;
        progressBar.style.width = `${progress}%`;
    }
}

const backgroundVideo = document.getElementById('background-video');
const thumbnailVideo = document.getElementById('thumbnail-video');
    const video = document.getElementById('background-video');
    const progressBar = document.getElementById('progress-bar');
    initializeVideoProgress(video, progressBar);

const emptyContainer = document.querySelector('.Empty-container');
const playPauseBtn = document.createElement('button');
playPauseBtn.id = 'pay-pause-btn';
playPauseBtn.className = 'control-btn';
playPauseBtn.setAttribute('aria-label', 'Play/Pause');

const playPauseIcon = document.createElement('img');
playPauseIcon.id = 'play-pause-icon';
playPauseIcon.src = 'https://storage.googleapis.com/msgsndr/aJYHtddTenz299BOqzfz/media/66eb0ca1f9de91588ec93e8c.png';
playPauseIcon.alt = 'Play/Pause Icon';
playPauseBtn.appendChild(playPauseIcon);

document.getElementById('chat-content').appendChild(playPauseBtn);

playPauseBtn.addEventListener('click', () => {
    togglePlayPause();
});

document.getElementById('play-pause-btn').addEventListener('click', () => {
    console.log("play button call");

    const playPauseIcon = document.getElementById('play-pause-icon');
    if (backgroundVideo.paused) {
        backgroundVideo.play();
        thumbnailVideo.play();
        playPauseIcon.src = 'https://storage.googleapis.com/msgsndr/aJYHtddTenz299BOqzfz/media/66eb060cf9de91b118c93a66.png';
    } else {
        backgroundVideo.pause();
        thumbnailVideo.pause();
        playPauseIcon.src = 'https://storage.googleapis.com/msgsndr/aJYHtddTenz299BOqzfz/media/66eb0ca1f9de91588ec93e8c.png';
    }
});

document.getElementById('mute-unmute-btn').addEventListener('click', () => {
    const muteIcon = document.getElementById('mute-unmute-icon');
    if (backgroundVideo.muted) {
        backgroundVideo.muted = false;
        thumbnailVideo.muted = false;
        muteIcon.src = 'https://storage.googleapis.com/msgsndr/aJYHtddTenz299BOqzfz/media/66eb0d81f003010e66500af7.png';
    } else {
        backgroundVideo.muted = true;
        thumbnailVideo.muted = true;
        muteIcon.src = 'https://storage.googleapis.com/msgsndr/aJYHtddTenz299BOqzfz/media/66eb0b2cc6a83988da4ff9fd.png';
    }
});

document.getElementById('refresh-btn').addEventListener('click', resetChatAndReload);

function resetChatAndReload() {
  collectedData = {};
  
  // Show loading overlay
  const loadingOverlay = document.getElementById('loading-overlay');
  if (loadingOverlay) {
      loadingOverlay.style.display = 'flex';
  }

  // Set max-height of .chat-content to 85%
  const chatContent = document.querySelector('.chat-content');
  if (chatContent) {
      chatContent.style.maxHeight = '81%';
  }

  // Simulate loading time before rendering the chat widget
  setTimeout(() => {
      renderChatWidget();
      
      // Hide loading overlay after content reloads
      if (loadingOverlay) {
          loadingOverlay.style.display = 'none';
      }
  }, 1000); // Adjust delay as needed
}

function showTypingIndicator() {
    const chatContent = document.getElementById('chat-content');
    const typingIndicator = document.createElement('div');
    typingIndicator.className = 'typing-indicator';
    typingIndicator.innerHTML = '<img src="https://storage.googleapis.com/msgsndr/yMsNTtrF5fKA28L0OMsP/media/6730641921c625d9aaa7e634.jpeg" alt="Typing..."> Typing...';
    chatContent.appendChild(typingIndicator);
    scrollToBottom();
    return typingIndicator;
}

function removeTypingIndicator(typingIndicator) {
    if (typingIndicator) {
        typingIndicator.remove();
    }
}

function askSituation() {
  debugger
  questionStack.push({ question: "situation", answer: null });
  const typingIndicator = showTypingIndicator();
  setTimeout(() => {
      removeTypingIndicator(typingIndicator);
      const messageTime = new Date(); // Capture the message time
      appendMessageWithImageAndTime("Hi 👋🏼 Welcome to Smith & Eulo Law Firm. How can we help you?", 'bot-message', messageTime);

      // Create input group for the dropdown select field
      const inputGroup = document.createElement('div');
      inputGroup.id = "situation-input-group";
      inputGroup.classList.add("chat-input-group");

      // Create select dropdown
      const selectField = document.createElement('select');
      selectField.id = "situation-select";
      selectField.classList.add("chat-input", "input-select-field");

      // Default option
      const defaultOption = document.createElement('option');
      defaultOption.value = "";
      defaultOption.textContent = "Select an option";
      defaultOption.disabled = true;
      defaultOption.selected = true;
      selectField.appendChild(defaultOption);

      // Options for the dropdown
      const options = [
          "Assault & Battery",
          "Violation of Probation/Parole/Community Control",
          "Expungement of Your Record",
          "Domestic Violence",
          "Possession of Drugs",
          "Federal Criminal Case",
          "DWI / DUI",
          "Possession of a Weapon",
          "Burglary",
          "Child Abuse",
          "Sex Crimes",
          "Manslaughter",
          "Child Pornography",
          "Robbery",
          "Harassment",
          "Clearing Criminal Record",
          "Prostitution",
          "Drug Possession and Trafficking",
          "Other Criminal Cases",
          "Car Accident",
          "Divorce And Custody",
          "Buying Products",
          "Buying Services",
          "Child Special Needs"
      ];

      options.forEach(optionText => {
          const option = document.createElement('option');
          option.value = optionText;
          option.textContent = optionText;
          selectField.appendChild(option);
      });

      // Submit button for the dropdown
      const submitButton = document.createElement('button');
      submitButton.classList.add("submit-icon");
      submitButton.onclick = handleSituation;

      // Add image icon for submit button
      const submitIcon = document.createElement('img');
      submitIcon.src = "https://storage.googleapis.com/msgsndr/aJYHtddTenz299BOqzfz/media/66fa91a7923b423d630ec12e.png";
      submitIcon.alt = "submit";
      submitButton.appendChild(submitIcon);

      // Append the select field and button to the input group
      inputGroup.appendChild(selectField);
      inputGroup.appendChild(submitButton);

      // Append the input group to chat content
      document.getElementById('chat-content').appendChild(inputGroup);
      scrollToBottom();
  }, 1000);
}

function handleSituation() {
  const selectField = document.getElementById('situation-select');
  const situation = selectField.value;
  if (!situation) {
      alert('Please select an option');
      return;
  }
  document.getElementById('situation-input-group').remove();
  appendSubmittedMessage(situation, 'user-message'); 
  collectedData.situation = situation;
  questionStack[questionStack.length - 1].answer = situation; 
  setTimeout(() => askFullName('situation'), 1000);
}


function askFullName(selectedQuestion) {
    if (selectedQuestion === "industry") {
        questionStack.push({ question: "industry", answer: null });
    } else {
        questionStack.push({ question: "roleAtLawFirm", answer: null });
    }
    const typingIndicator = showTypingIndicator();
    setTimeout(() => {
        removeTypingIndicator(typingIndicator);
        const messageTime = new Date();
        appendMessageWithImageAndTime(
            'Before I ask a few more important questions about your case, may I have your Full Name?', 
            'bot-message', 
            messageTime, 
            false
        );

        const inputGroup = createInputGroup('First Name', handleFullName, '', 'text', false, 'Last Name');
        const [firstNameInput, lastNameInput] = inputGroup.querySelectorAll('input');
        if (firstNameInput && lastNameInput) {
            firstNameInput.classList.add('first-name');
            lastNameInput.classList.add('last-name');
        }
        document.getElementById('chat-content').appendChild(inputGroup);
        scrollToBottom();
    }, 1000);
}

function handleFullName(firstName, lastName) {
    const firstNameField = document.querySelector('.first-name'); // Select the first name 
    const lastNameField = document.querySelector('.last-name');   // Select the last name 
    let hasError = false;
    if (!firstName.trim()) {
        firstNameField.style.borderColor = 'red';
        firstNameField.placeholder = 'Please enter first name';
        firstNameField.classList.add('error-placeholder');
        hasError = true;
    } else {
        firstNameField.style.borderColor = ''; // Reset styling
        firstNameField.placeholder = 'First Name';
        firstNameField.classList.remove('error-placeholder');
    }
    if (!lastName.trim()) {
        lastNameField.style.borderColor = 'red';
        lastNameField.placeholder = 'Please enter last name';
        lastNameField.classList.add('error-placeholder');
        hasError = true;
    } else {
        lastNameField.style.borderColor = ''; // Reset styling
        lastNameField.placeholder = 'Last Name';
        lastNameField.classList.remove('error-placeholder');
    }
    if (hasError) return; // Exit if there's an error
    appendMessage(`${firstName} ${lastName}`, 'user-message', false);
    collectedData.firstName = firstName;
    collectedData.lastName = lastName;
    removeInputGroup();
    setTimeout(() => askPhoneNumber(), 1000);
}

function askPhoneNumber() {
    questionStack.push({ question: "situation", answer: null });
    const typingIndicator = showTypingIndicator();
    setTimeout(() => {
        removeTypingIndicator(typingIndicator);
        const messageTime = new Date(); // Capture the message time

        // Bot message with isOption = true for question
        appendMessageWithImageAndTime("May I also have a phone number in case we need to speak with you?", 'bot-message', messageTime, true);

        // Create the input group
        const inputGroup = createInputGroup('Type Phone Number', handlePhoneNumber, '', 'tel', true); // Changed 'text' to 'tel' for better input control

        // Change the input class of the phone number input to 'phone-num'
        const phoneNumberInput = inputGroup.querySelector('input'); // Target the phone number input field
        if (phoneNumberInput) {
            phoneNumberInput.classList.remove('input-field'); // Remove the default 'input-field' class
            phoneNumberInput.classList.add('phone-num'); // Add the 'phone-num' class

            // Only allow numeric input (phone numbers)
            phoneNumberInput.addEventListener('input', (event) => {
                event.target.value = event.target.value.replace(/[^0-9]/g, ''); // Remove non-numeric characters
            });
        }

        document.getElementById('chat-content').appendChild(inputGroup);
        scrollToBottom();
    }, 1000);
}

function handlePhoneNumber(phoneNumber) {
    const countryCode = document.getElementById('country-code-select').value; // Use only the country code select element
    if (!phoneNumber.trim() || phoneNumber.length < 7) {
        alert("Please enter a valid phone number.");
        return;
    }

    appendMessage(`${countryCode} ${phoneNumber}`, 'user-message', false); // Append phone with country code
    collectedData.phone = `${countryCode} ${phoneNumber}`; // Store only phone number and correct country code
    removeInputGroup();
    setTimeout(() => askEmail(), 1000);
}

function askEmail() {
    debugger
    questionStack.push({ question: "situation", answer: null });
    const typingIndicator = showTypingIndicator();
    const messageTime = new Date(); // Capture the message time
    setTimeout(() => {
        removeTypingIndicator(typingIndicator);

        // Bot message with isOption = true for question
        appendMessageWithImageAndTime("And an email address?", 'bot-message', messageTime, true);

        const inputGroup = createInputGroup('Type Email Address', handleEmail, '', 'email');
        document.getElementById('chat-content').appendChild(inputGroup);
        scrollToBottom();
    }, 1000);
}

function handleEmail(email) {
    debugger
    if (!email.trim() || !validateEmail(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Append the email as a user message
    appendMessage(email, 'user-message', false);
    collectedData.email = email;
    removeInputGroup();

    // Ask follow-up question based on the selected option
    setTimeout(() => askNextQuestionBasedOnOption(), 1000);
}

// Function to ask next question based on the selected option
function askNextQuestionBasedOnOption() {
    debugger
    const typingIndicator = showTypingIndicator();
    setTimeout(() => {
        removeTypingIndicator(typingIndicator);

        // Check for specific options and ask relevant follow-up questions or call specific functions
        if (selectedOption === "Assault & Battery") {
            askState("situation"); // Call askProductInterest directly for Assault & Battery
            return;
        }

        else if (selectedOption === "Violation of Probation/Parole/Community Control") {
            askOriginalCharge("situation");
            return;
        }

        else if (selectedOption === "Expungement of Your Record") {
            askFinalQuestion("situation");
        }

        else if (selectedOption === "Child Special Needs") {
            askChildBirthDate("situation")
        }

        else if (selectedOption === "Buying Products") {
            askProductType("situation")
        }

        else if (selectedOption === "Buying Services") {
            askServiceType("situation")
        }

        else if (selectedOption === "Divorce And Custody") {
            askTribeAffiliation("situation")
        }

        else if (selectedOption === "Car Accident") {
            askAccidentState("situation")
        }

        else if (selectedOption === "Other Criminal Cases") {
            askStateCriminal("situation")
        }

        else if (selectedOption === "Drug Possession and Trafficking") {
            askStateDrug("situation")
        }

        else if (selectedOption === "Prostitution") {
            askForWhom("situation")
        }
        // Display follow-up question
        appendMessageWithImageAndTime(followUpQuestion, 'bot-message', new Date());
        const inputGroup = createInputGroup('Type your response', handleFollowUpResponse, '', 'text');
        document.getElementById('chat-content').appendChild(inputGroup);
        scrollToBottom();
    }, 1000);
}

// Function to handle follow-up response
function handleFollowUpResponse(response) {
    if (!response.trim()) {
        alert("Please enter a response.");
        return;
    }

    // Append the follow-up response as a user message
    appendMessage(response, 'user-message', false);
    collectedData.followUpResponse = response;
    removeInputGroup();

    // Proceed as needed to the next steps in your flow
    setTimeout(() => askNextSteps(), 1000); // Adjust this function as necessary
}

function askState() {
    // Push the correct question type onto the question stack
    questionStack.push({ question: "productInterest", answer: null });
    const typingIndicator = showTypingIndicator();
    const messageTime = new Date(); // Capture the message time
    setTimeout(() => {
        removeTypingIndicator(typingIndicator);
        // Bot message with message time
        appendMessageWithImageAndTime("What state did the offense occur in?", 'bot-message', messageTime, true);

        // Create dropdown for role options
        const stateOptions = `
        <div id="state-options" class="chat-options">
            <select id="state-select" class="option-select">
                <option class="opt-cstm" value="" disabled selected>Select a state</option>
                <option class="opt-cstm" value="California">California</option>
                <option class="opt-cstm" value="Texas">Texas</option>
                <option class="opt-cstm" value="Florida">Florida</option>
                <!-- Add more states here if needed -->
            </select>
            <button class="submit-icon" onclick="handleStateSelection()"><img src="https://storage.googleapis.com/msgsndr/aJYHtddTenz299BOqzfz/media/66fa91a7923b423d630ec12e.png" alt="img"></button>
        </div>
        `;

        // Append role options to chat content
        const inputGroup = document.createElement('div');
        inputGroup.innerHTML = stateOptions;
        document.getElementById('chat-content').appendChild(inputGroup);
        scrollToBottom(); // Ensure scroll is at the bottom after adding options
    }, 1000);
}

// Function to handle role selection with undo functionality
function handleStateSelection() {
    const state = document.getElementById('state-select').value;
    
    if (!state) {
        alert('Please select a state');
        return;
    }

    // Remove the role options immediately
    document.getElementById('state-options').remove();

    // Append the user's choice to the chat
    appendSubmittedMessage(state, 'user-message', true); // Add 'true' to show the undo button
    collectedData.stateSelect = state; // Collect the role selection
    questionStack[questionStack.length - 1].answer = state; // Update the last question stack with answer

    // Scroll to the bottom after user's choice is added
    scrollToBottom();

    // Proceed to the next question (ask for the name)
    setTimeout(() => askCountry(), 1000);
}

function askCountry() {
    questionStack.push({ question: "state", answer: null });
    const messageTime = new Date(); // Capture the message time
    appendMessageWithImageAndTime("And what country?", 'bot-message', messageTime);

    const inputGroup = createInputGroup('Type here...', handleCountry);
    document.getElementById('chat-content').appendChild(inputGroup);
    scrollToBottom();
}

function handleCountry(nameCountry) {
    if (!nameCountry.trim()) {
        alert("Please enter a valid name.");
        return;
    }

    appendMessage(nameCountry, 'user-message', false); // Show the name input
    collectedData.countryName = nameCountry; // Store recommender name
    removeInputGroup(); // Remove the input field
    setTimeout(() => askForSelfOrOther(), 1000); // Move to the next question
}

function askForSelfOrOther() {
    questionStack.push({ question: "usingLiveChat", answer: null });
    const messageTime = new Date(); // Capture the message time
    
    // Append message with unique class for "usingLiveChat" question
    appendMessageWithImageAndTime(
        "Is this for you or someone else?", 
        'bot-message question-forSelfOrOther', 
        messageTime
    );

    // Create options for "Me" and "Someone Else"
    const forSelfOrOtherOptions = `
        <div id="self-or-other-options" class="chat-options">
            <button class="option-btn" onclick="handleForSelfOrOther('Me')">Me</button>
            <button class="option-btn" onclick="handleForSelfOrOther('Someone Else')">Someone Else</button>
        </div>
    `;

    document.getElementById('chat-content').insertAdjacentHTML('beforeend', forSelfOrOtherOptions);
    scrollToBottom();
}

// Function to handle selection of "Me" or "Someone Else"
function handleForSelfOrOther(selectedOption) {
    // Remove the options after selection
    const optionsContainer = document.getElementById('self-or-other-options');
    if (optionsContainer) optionsContainer.remove();
    
    // Append the user's choice to the chat with a unique class
    appendSubmittedMessage(selectedOption, 'user-message question-forSelfOrOther', true); // Pass 'true' to show Undo button
    collectedData.forSelfOrOther = selectedOption; // Collect the user's choice
    questionStack[questionStack.length - 1].answer = selectedOption; // Update the last question stack with answer

    scrollToBottom();

    // Check selected option and proceed accordingly
    if (selectedOption === 'Me') {
        setTimeout(() => askChargeType(), 1000); // Go to askChargeType if "Me" is selected
    } else {
        setTimeout(() => askOtherPersonName(), 1000); // Go to askOtherPersonName if "Someone Else" is selected
    }
}

function askOtherPersonName() {
    questionStack.push({ question: "forSelfOrOther", answer: null });
    const messageTime = new Date(); // Capture the message time
    appendMessageWithImageAndTime("What's their name?", 'bot-message', messageTime);

    const inputGroup = createInputGroup('Enter their name', handleOtherPersonNameInput);
    document.getElementById('chat-content').appendChild(inputGroup);
    scrollToBottom();
}

function handleOtherPersonNameInput(name) {
    if (!name.trim()) {
        alert("Please enter a valid name.");
        return;
    }

    appendMessage(name, 'user-message', false); // Show the name input
    collectedData.otherPersonName = name; // Store the name of the other person
    removeInputGroup(); // Remove the input field
    setTimeout(() => askIfInCustody(), 1000); // Move to the next question
}

function askChargeType() {
    questionStack.push({ question: "forSelfOrOther", answer: null });
    const typingIndicator = showTypingIndicator();
    setTimeout(() => {
        removeTypingIndicator(typingIndicator);
        const messageTime = new Date(); // Capture the message time
        appendMessageWithImageAndTime("Is the charge a felony or a misdemeanor?", 'bot-message', messageTime, true);

        // Create a dropdown for charge options with a submit button
        const chargeOptions = `
        <div id="charge-options" class="chat-options">
            <select id="charge-select" class="option-select">
                <option class="opt-cstm" value="" disabled selected>Select charge type</option>
                <option class="opt-cstm" value="Felony">Felony</option>
                <option class="opt-cstm" value="Misdemeanor">Misdemeanor</option>
                <option class="opt-cstm" value="Not Sure">Not Sure</option>
            </select>
            <button class="submit-icon" onclick="handleChargeTypeSelection()">
                <img src="https://storage.googleapis.com/msgsndr/aJYHtddTenz299BOqzfz/media/66fa91a7923b423d630ec12e.png" alt="submit">
            </button>
        </div>
        `;

        // Append the dropdown to chat content
        document.getElementById('chat-content').insertAdjacentHTML('beforeend', chargeOptions);
        scrollToBottom(); // Ensure scroll is at the bottom after adding options
    }, 1000);
}

// Function to handle charge type selection from dropdown
function handleChargeTypeSelection() {
    const chargeType = document.getElementById('charge-select').value;

    if (!chargeType) {
        alert('Please select a charge type');
        return;
    }

    // Remove the dropdown options after selection
    document.getElementById('charge-options').remove();

    // Append the user's choice to the chat
    appendSubmittedMessage(chargeType, 'user-message', true); // Show the selected charge type
    collectedData.chargeType = chargeType; // Store the selected charge type
    questionStack[questionStack.length - 1].answer = chargeType; // Update the last question in the stack with the answer

    scrollToBottom(); // Scroll to the bottom after user's choice is added

    // Proceed to the next question
    setTimeout(() => askAdditionalCharges(), 1000);
}

function askIfInCustody() {
    questionStack.push({ question: "situation", answer: null });
    const typingIndicator = showTypingIndicator();
    setTimeout(() => {
        removeTypingIndicator(typingIndicator);
        const messageTime = new Date(); // Capture the message time
        appendMessageWithImageAndTime("Are they currently in police custody?", 'bot-message', messageTime, true);

        // Create a dropdown for custody options with a submit button
        const custodyOptions = `
        <div id="custody-options" class="chat-options">
            <select id="custody-select" class="option-select">
                <option class="opt-cstm" value="" disabled selected>Select an option</option>
                <option class="opt-cstm" value="Yes, in jail">Yes, in jail</option>
                <option class="opt-cstm" value="No">No</option>
            </select>
            <button class="submit-icon" onclick="handleCustodySelection()">
                <img src="https://storage.googleapis.com/msgsndr/aJYHtddTenz299BOqzfz/media/66fa91a7923b423d630ec12e.png" alt="submit">
            </button>
        </div>
        `;

        // Append the dropdown to chat content
        document.getElementById('chat-content').insertAdjacentHTML('beforeend', custodyOptions);
        scrollToBottom(); // Ensure scroll is at the bottom after adding options
    }, 1000);
}

// Function to handle custody selection from dropdown
function handleCustodySelection() {
    const custodyStatus = document.getElementById('custody-select').value;

    if (!custodyStatus) {
        alert('Please select a custody status');
        return;
    }

    // Remove the dropdown options after selection
    document.getElementById('custody-options').remove();

    // Append the user's choice to the chat
    appendMessage(custodyStatus, 'user-message', true); // Show selected custody status
    collectedData.custodyStatus = custodyStatus; // Store the selected custody status
    questionStack[questionStack.length - 1].answer = custodyStatus; // Update the last question in the stack with the answer

    scrollToBottom(); // Scroll to the bottom after user's choice is added

    // Proceed to the next question
    setTimeout(() => askChargeType(), 1000);
}

function askAdditionalCharges() {
    questionStack.push({ question: "situation", answer: null });
    const typingIndicator = showTypingIndicator();
    setTimeout(() => {
        removeTypingIndicator(typingIndicator);
        const messageTime = new Date(); // Capture the message time
        appendMessageWithImageAndTime("Are there any additional charges?", 'bot-message', messageTime, true);

        // Create a dropdown for additional charges options with a submit button
        const additionalChargesOptions = `
        <div id="additional-charges-options" class="chat-options">
            <select id="additional-charges-select" class="option-select">
                <option class="opt-cstm" value="" disabled selected>Select an option</option>
                <option class="opt-cstm" value="Yes">Yes</option>
                <option class="opt-cstm" value="Nothing additional">Nothing additional</option>
                <option class="opt-cstm" value="Not Sure">Not Sure</option>
            </select>
            <button class="submit-icon" onclick="handleAdditionalChargesSelection()">
                <img src="https://storage.googleapis.com/msgsndr/aJYHtddTenz299BOqzfz/media/66fa91a7923b423d630ec12e.png" alt="submit">
            </button>
        </div>
        `;

        // Append the dropdown to chat content
        document.getElementById('chat-content').insertAdjacentHTML('beforeend', additionalChargesOptions);
        scrollToBottom(); // Ensure scroll is at the bottom after adding options
    }, 1000);
}

// Function to handle additional charges selection from dropdown
function handleAdditionalChargesSelection() {
    const choice = document.getElementById('additional-charges-select').value;

    if (!choice) {
        alert('Please select an option for additional charges');
        return;
    }

    // Remove the dropdown options after selection
    document.getElementById('additional-charges-options').remove();

    // Append the user's choice to the chat
    appendMessage(choice, 'user-message', true); // Show selected additional charges option
    collectedData.additionalCharges = choice; // Store the selected additional charges option
    questionStack[questionStack.length - 1].answer = choice; // Update the last question in the stack with the answer

    scrollToBottom(); // Scroll to the bottom after user's choice is added

    // Proceed based on the user's choice
    if (choice === 'Yes') {
        setTimeout(() => askForAdditionalChargesDetails(), 1000);
    } else {
        setTimeout(() => askNextHearingDate(), 1000);
    }
}

function askForAdditionalChargesDetails() {
    questionStack.push({ question: "situation", answer: null });
    const typingIndicator = showTypingIndicator();
    setTimeout(() => {
        removeTypingIndicator(typingIndicator);
        const messageTime = new Date(); // Capture the message time
        appendMessageWithImageAndTime("What are the additional charges?", 'bot-message', messageTime);

        // Create input field with options to submit or select "Other"
        const additionalChargesOptions = `
            <div id="additional-charges-details-options" class="chat-options">
                <input type="text" id="additional-charges-details-input" placeholder="Type here...">
                <button class="submit-icon" onclick="handleAdditionalChargesDetails()">Submit</button>
            </div>
        `;
        document.getElementById('chat-content').insertAdjacentHTML('beforeend', additionalChargesOptions);
        scrollToBottom();
    }, 1000);
}

// Function to handle submission of additional charges details
function handleAdditionalChargesDetails() {
    const details = document.getElementById('additional-charges-details-input').value;

    if (!details.trim()) {
        alert("Please enter additional charges details.");
        return;
    }

    // Remove the input field after submission
    document.getElementById('additional-charges-details-options').remove();

    // Append the user's input to the chat
    appendMessage(details, 'user-message', false);
    collectedData.additionalChargesDetails = details; // Store the additional charges details
    scrollToBottom();

    // Proceed to the next question
    setTimeout(() => askNextHearingDate(), 1000);
}

function askNextHearingDate() {
    questionStack.push({ question: "situation", answer: null });
    const typingIndicator = showTypingIndicator();
    
    setTimeout(() => {
        removeTypingIndicator(typingIndicator);
        const messageTime = new Date(); // Capture the message time
        appendMessageWithImageAndTime("When is the next hearing?", 'bot-message', messageTime, true);

        const dateOptionsHTML = `
        <div id="date-options" class="chat-options">
            <select id="month-select" class="option-select">
                <option class="opt-cstm" value="" disabled selected>Select a month</option>
                ${generateMonthOptions()}
            </select>
            <select id="year-select" class="option-select">
                <option class="opt-cstm" value="" disabled selected>Select a year</option>
                ${generateYearOptions(2023, 2025)}
            </select>
            <button class="submit-icon" onclick="handleHearingDate()">
                <img src="https://storage.googleapis.com/msgsndr/aJYHtddTenz299BOqzfz/media/66fa91a7923b423d630ec12e.png" alt="submit">
            </button>
        </div>
        `;
        
        document.getElementById('chat-content').insertAdjacentHTML('beforeend', dateOptionsHTML);
        disablePreviousUndoButtons();
        scrollToBottom();
    }, 1000);
}

function generateMonthOptions() {
    const months = ["January", "February", "March", "April", "May", "June", 
                    "July", "August", "September", "October", "November", "December"];
    return months.map(month => `<option class="opt-cstm" value="${month}">${month}</option>`).join('');
}

function generateYearOptions(startYear, endYear) {
    let yearOptions = '';
    for (let year = startYear; year <= endYear; year++) {
        yearOptions += `<option class="opt-cstm" value="${year}">${year}</option>`;
    }
    return yearOptions;
}

function handleHearingDate() {
    const month = document.getElementById('month-select').value;
    const year = document.getElementById('year-select').value;

    if (!month || !year) {
        alert("Please select both month and year.");
        return;
    }

    const hearingDate = `${month} ${year}`;
    document.getElementById('date-options').remove();
    appendMessage(hearingDate, 'user-message', true);
    collectedData.hearingDate = hearingDate;

    setTimeout(() => askOtherDetails(), 1000);
}

function askOtherDetails() {
    questionStack.push({ question: "nextHearingDate", answer: null });
    const typingIndicator = showTypingIndicator();
    
    setTimeout(() => {
        removeTypingIndicator(typingIndicator);
        const messageTime = new Date(); // Capture the message time
        appendMessageWithImageAndTime("Are there any other details you want me to know about the situation?", 'bot-message', messageTime, false);
        
        const inputGroup = createInputGroup('Type here...', handleOtherDetails);
        document.getElementById('chat-content').appendChild(inputGroup);
        
        scrollToBottom();
    }, 1000);
}

function handleOtherDetails(details) {
    // Validate input
    if (!details.trim()) {
        alert("Please provide some details or type 'None' if there are no additional details.");
        return;
    }

    // Append user's input to chat and save the response
    appendMessage(details, 'user-message', false);
    collectedData.otherDetails = details;

    // Remove input field and proceed to the next question
    removeInputGroup();
    setTimeout(() => askHowDidYouFindUs(), 1000);
}

function askHowDidYouFindUs() {
    questionStack.push({ question: "situation", answer: null });
    const typingIndicator = showTypingIndicator();

    setTimeout(() => {
        removeTypingIndicator(typingIndicator);
        const messageTime = new Date(); // Capture the message time
        appendMessageWithImageAndTime("How did you find out about us?", 'bot-message', messageTime, true);

        const findUsOptions = `
            <div id="find-us-options" class="chat-options">
                <select id="find-us-select" class="option-select">
                    <option class="opt-cstm" value="" disabled selected>Select an option</option>
                    <option class="opt-cstm" value="Google">Google</option>
                    <option class="opt-cstm" value="TV Commercial">TV Commercial</option>
                    <option class="opt-cstm" value="Billboard">Billboard</option>
                    <option class="opt-cstm" value="Friend Referral">Friend Referral</option>
                    <option class="opt-cstm" value="Bondsmen Referral">Bondsmen Referral</option>
                    <option class="opt-cstm" value="Social Media">Social Media</option>
                    <option class="opt-cstm" value="Other">Other</option>
                </select>
                <button class="submit-icon" onclick="handleFindUs()">
                    <img src="https://storage.googleapis.com/msgsndr/aJYHtddTenz299BOqzfz/media/66fa91a7923b423d630ec12e.png" alt="submit">
                </button>
            </div>
        `;
        
        document.getElementById('chat-content').insertAdjacentHTML('beforeend', findUsOptions);
        disablePreviousUndoButtons();
        scrollToBottom();
    }, 1000);
}

function handleFindUs() {
    const findUs = document.getElementById('find-us-select').value;

    // Check if an option is selected
    if (!findUs) {
        alert("Please select an option.");
        return;
    }

    // Remove the options immediately
    document.getElementById('find-us-options').remove();

    // Append the user's choice to the chat and store it in collectedData
    appendMessage(findUs, 'user-message', true);
    collectedData.findUs = findUs;

    // Directly submit the data and show a thank-you message after the last question
    setTimeout(() => {
        submitData(); // Automatically submit data after the last question
    }, 1000);
}

function askOriginalCharge() {
    questionStack.push({ question: "originalCharge", answer: null });
    const typingIndicator = showTypingIndicator();
    setTimeout(() => {
        removeTypingIndicator(typingIndicator);
        const messageTime = new Date(); // Capture the message time
        appendMessageWithImageAndTime("What was the original charge?", 'bot-message', messageTime, true);

        // Create a dropdown for original charge options with a submit button
        const chargeOptions = `
        <div id="original-charge-options" class="chat-options">
            <select id="original-charge-select" class="option-select">
                <option class="opt-cstm" value="" disabled selected>Select original charge</option>
                <option class="opt-cstm" value="Felony">Felony</option>
                <option class="opt-cstm" value="Misdemeanor">Misdemeanor</option>
            </select>
            <button class="submit-icon" onclick="handleOriginalChargeSelection()">
                <img src="https://storage.googleapis.com/msgsndr/aJYHtddTenz299BOqzfz/media/66fa91a7923b423d630ec12e.png" alt="submit">
            </button>
        </div>
        `;

        // Append the dropdown to chat content
        document.getElementById('chat-content').insertAdjacentHTML('beforeend', chargeOptions);
        scrollToBottom(); // Ensure scroll is at the bottom after adding options
    }, 1000);
}

function handleOriginalChargeSelection() {
    const originalCharge = document.getElementById('original-charge-select').value;

    if (!originalCharge) {
        alert('Please select an original charge');
        return;
    }

    // Remove the dropdown options after selection
    document.getElementById('original-charge-options').remove();

    // Append the user's choice to the chat
    appendSubmittedMessage(originalCharge, 'user-message', true); // Show the selected original charge
    collectedData.originalCharge = originalCharge; // Store the selected original charge
    questionStack[questionStack.length - 1].answer = originalCharge; // Update the last question in the stack with the answer

    scrollToBottom(); // Scroll to the bottom after user's choice is added

    // Proceed to the next question
    setTimeout(() => askProbationMonths(), 1000);
}

function askProbationMonths() {
    questionStack.push({ question: "probationMonths", answer: null });
    appendMessageWithImageAndTime("How many months did the defendant have left on their probation?", 'bot-message');

    const monthsSlider = `
        <div id="months-slider-container" class="months-slider">
            <input type="range" min="0" max="60" step="1" value="0" id="monthsRange" oninput="updateMonthsCount(this.value)">
            <span id="monthsCount">0</span> months
        </div>
    `;
    document.getElementById('chat-content').insertAdjacentHTML('beforeend', monthsSlider);
    document.getElementById('chat-content').insertAdjacentHTML('beforeend', `<button id="submitMonthsBtn" class="option-btn" onclick="submitMonthsCount()">Submit</button>`);
}

function updateMonthsCount(value) {
    document.getElementById('monthsCount').innerHTML = value;
}

function submitMonthsCount() {
    const monthsLeft = document.getElementById('monthsRange').value;
    
    // Append the user's input with Undo functionality
    appendSubmittedMessage(`${monthsLeft} months`, 'user-message', true); // Add 'true' to show the Undo button
    collectedData.probationMonths = monthsLeft; // Store the months left on probation
    questionStack[questionStack.length - 1].answer = monthsLeft; // Update the last question stack with the answer

    // Hide the slider and submit button after submission
    document.getElementById('months-slider-container').style.display = 'none';
    document.getElementById('submitMonthsBtn').style.display = 'none';

    // Proceed to the next question
    scrollToBottom();
    setTimeout(() => askDefendantInJail(), 1000); // Replace with the actual next question function
}

function askDefendantInJail() {
    questionStack.push({ question: "defendantInJail", answer: null });
    const messageTime = new Date(); // Capture the message time
    
    // Append message with unique class for "defendantInJail" question
    appendMessageWithImageAndTime(
        "Is the defendant currently in jail?", 
        'bot-message question-defendantInJail', 
        messageTime
    );

    // Create dropdown for jail status options
    const jailStatusOptions = `
        <div id="jail-status-options" class="chat-options question-defendantInJail">
            <select id="jail-status-select" class="option-select">
                <option class="opt-cstm" value="" disabled selected>Select an option</option>
                <option class="opt-cstm" value="Yes">Yes</option>
                <option class="opt-cstm" value="No">No</option>
            </select>
            <button class="submit-icon" onclick="handleJailStatusOption()">
              <img src="https://storage.googleapis.com/msgsndr/aJYHtddTenz299BOqzfz/media/66fa91a7923b423d630ec12e.png" alt="submit">
            </button>
        </div>
    `;

    document.getElementById('chat-content').insertAdjacentHTML('beforeend', jailStatusOptions);
    scrollToBottom();
}

// Function to handle jail status selection
function handleJailStatusOption() {
    const jailStatus = document.getElementById('jail-status-select').value;
    
    if (!jailStatus) {
        alert('Please select an option');
        return;
    }

    // Remove the options after selection
    document.getElementById('jail-status-options').remove();
    
    // Append the user's choice with the unique class
    appendSubmittedMessage(jailStatus, 'user-message question-defendantInJail', true); // Add 'true' to show the Undo button
    collectedData.defendantInJail = jailStatus; // Collect the user's choice
    questionStack[questionStack.length - 1].answer = jailStatus; // Update the last question stack with answer

    scrollToBottom();

    // Check jail status and proceed to the next question accordingly
    if (jailStatus === 'Yes') {
        setTimeout(() => askNextHearingDate(), 1000); // Replace with the actual function for the next question if "Yes"
    } else {
        setTimeout(() => askWarrantStatus(), 1000); // Replace with the actual function for the next question if "No"
    }
}


function askWarrantStatus() {
    questionStack.push({ question: "warrantStatus", answer: null });
    const messageTime = new Date(); // Capture the message time
    
    // Append message with unique class for "warrantStatus" question
    appendMessageWithImageAndTime(
        "Is there a warrant out for their arrest?", 
        'bot-message question-warrantStatus', 
        messageTime
    );

    // Create dropdown for warrant status options
    const warrantStatusOptions = `
        <div id="warrant-status-options" class="chat-options question-warrantStatus">
            <select id="warrant-status-select" class="option-select">
                <option class="opt-cstm" value="" disabled selected>Select an option</option>
                <option class="opt-cstm" value="Yes">Yes</option>
                <option class="opt-cstm" value="No">No</option>
                <option class="opt-cstm" value="Not Sure">Not Sure</option>
            </select>
            <button class="submit-icon" onclick="handleWarrantStatusOption()">
              <img src="https://storage.googleapis.com/msgsndr/aJYHtddTenz299BOqzfz/media/66fa91a7923b423d630ec12e.png" alt="submit">
            </button>
        </div>
    `;

    document.getElementById('chat-content').insertAdjacentHTML('beforeend', warrantStatusOptions);
    scrollToBottom();
}

// Function to handle warrant status selection
function handleWarrantStatusOption() {
    const warrantStatus = document.getElementById('warrant-status-select').value;
    
    if (!warrantStatus) {
        alert('Please select an option');
        return;
    }

    // Remove the options after selection
    document.getElementById('warrant-status-options').remove();
    
    // Append the user's choice with the unique class
    appendSubmittedMessage(warrantStatus, 'user-message question-warrantStatus', true); // Add 'true' to show the Undo button
    collectedData.warrantStatus = warrantStatus; // Collect the user's choice
    questionStack[questionStack.length - 1].answer = warrantStatus; // Update the last question stack with answer

    scrollToBottom();
        setTimeout(() => askNextHearingDate(), 1000);

}

function askReasonForViolation() {
    questionStack.push({ question: "reasonForViolation", answer: null });
    const typingIndicator = showTypingIndicator();

    setTimeout(() => {
        removeTypingIndicator(typingIndicator);
        const messageTime = new Date(); // Capture the message time
        appendMessageWithImageAndTime("What is the reason for violation?", 'bot-message', messageTime, true);

        const violationOptions = `
            <div id="violation-options" class="chat-options">
                <select id="violation-select" class="option-select">
                    <option class="opt-cstm" value="" disabled selected>Select an option</option>
                    <option class="opt-cstm" value="Failure of alcohol or drug screening">Failure of alcohol or drug screening</option>
                    <option class="opt-cstm" value="Left the assigned area">Left the assigned area</option>
                    <option class="opt-cstm" value="Failure to meet the probation officer">Failure to meet the probation officer</option>
                    <option class="opt-cstm" value="Failure to pay fees or fine">Failure to pay fees or fine</option>
                    <option class="opt-cstm" value="Association with known criminals">Association with known criminals</option>
                    <option class="opt-cstm" value="Other">Other</option>
                </select>
                <button class="submit-icon" onclick="handleReasonForViolation()">
                    <img src="https://storage.googleapis.com/msgsndr/aJYHtddTenz299BOqzfz/media/66fa91a7923b423d630ec12e.png" alt="submit">
                </button>
            </div>
        `;
        
        document.getElementById('chat-content').insertAdjacentHTML('beforeend', violationOptions);
        disablePreviousUndoButtons();
        scrollToBottom();
    }, 1000);
}

function handleReasonForViolation() {
    const reasonForViolation = document.getElementById('violation-select').value;

    // Check if an option is selected
    if (!reasonForViolation) {
        alert("Please select an option.");
        return;
    }

    // Remove the options immediately
    document.getElementById('violation-options').remove();

    // Append the user's choice to the chat and store it in collectedData
    appendMessage(reasonForViolation, 'user-message', true);
    collectedData.reasonForViolation = reasonForViolation;

    // Directly submit the data and show a thank-you message after the last question
    setTimeout(() => {
        submitData(); // Automatically submit data after the last question
    }, 1000);
}

















function askForWhom() {
    questionStack.push({ question: "forWhom", answer: null });
    const typingIndicator = showTypingIndicator();

    setTimeout(() => {
        removeTypingIndicator(typingIndicator);
        const messageTime = new Date(); // Capture the message time
        appendMessageWithImageAndTime("Is this for you or someone else?", 'bot-message', messageTime, true);

        const forWhomOptions = `
            <div id="for-whom-options" class="chat-options">
                <div class="option-button" onclick="handleForWhom('Myself')">
                    <input type="radio" id="myself-option" name="for-whom" value="Myself">
                    <label for="myself-option">Myself</label>
                </div>
                <div class="option-button" onclick="handleForWhom('Someone else')">
                    <input type="radio" id="someone-else-option" name="for-whom" value="Someone else">
                    <label for="someone-else-option">Someone else</label>
                </div>
            </div>
        `;
        
        document.getElementById('chat-content').insertAdjacentHTML('beforeend', forWhomOptions);
        disablePreviousUndoButtons();
        scrollToBottom();
    }, 1000);
}

function handleForWhom(selectedOption) {
    // Remove the options immediately
    document.getElementById('for-whom-options').remove();

    // Append the user's choice to the chat and store it in collectedData
    appendMessage(selectedOption, 'user-message', true);
    collectedData.forWhom = selectedOption;

    // Directly submit the data and show a thank-you message after the last question
    setTimeout(() => {
        submitData(); // Automatically submit data after the last question
    }, 1000);
}


































































function askProductInterest(selectedQuestion) {
    if (selectedQuestion === "cashSave") {
        questionStack.push({ question: "cashSave", answer: null });
    } else {
        questionStack.push({ question: "situation", answer: null });
    }

    const typingIndicator = showTypingIndicator();
    const messageTime = new Date(); // Capture message time

    setTimeout(() => {
        removeTypingIndicator(typingIndicator); // Remove typing indicator
        appendMessageWithImageAndTime("Which Intake Bot™ products are you interested in? Select and submit when ready.", 'bot-message', messageTime, true);

        const productOptions = `
        <div id="product-options" class="chat-options">
            <div class="dropdown">
                <button class="dropdown-btn" onclick="toggleDropdown()">Select Products</button>
                <div class="dropdown-content" id="dropdown-content">
                    <label><input type="checkbox" value="Website Chat" /> Website Chat</label>
                    <label><input type="checkbox" value="Live Call-Connect" /> Live Call-Connect</label>
                    <label><input type="checkbox" value="Texting" /> Texting</label>
                    <label><input type="checkbox" value="1-click Retainers" /> 1-click Retainers</label>
                    <label><input type="checkbox" value="LSA Responder" /> LSA Responder</label>
                    <button id="submit-btn" class="submit-icon" onclick="handleSubmitProductInterest()">
                      <img src="https://storage.googleapis.com/msgsndr/aJYHtddTenz299BOqzfz/media/66fa91a7923b423d630ec12e.png" alt="submit">
                    </button>
                </div>
            </div>
        </div>
        `;

        const inputGroup = document.createElement('div');
        inputGroup.innerHTML = productOptions;
        document.getElementById('chat-content').appendChild(inputGroup);
        scrollToBottom(); // Scroll to bottom after appending options
    }, 1000);
}

function toggleDropdown() {
    const dropdownContent = document.getElementById("dropdown-content");
    dropdownContent.style.display = dropdownContent.style.display === "none" || dropdownContent.style.display === "" ? "block" : "none";
    scrollToBottom(); // Ensure scroll to bottom after toggling the dropdown
}

function handleSubmitProductInterest() {
    const checkboxes = document.querySelectorAll("#dropdown-content input[type='checkbox']");
    const selectedProducts = Array.from(checkboxes)
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.value);

    if (selectedProducts.length === 0) {
        const messageTime = new Date();
        appendMessageWithImageAndTime("Please select at least one product before submitting.", 'bot-message', messageTime, true);
        scrollToBottom(); // Ensure scroll to bottom if no option selected and message is shown
    } else {
        const submittedProductsMessage = `${selectedProducts.join(', ')}`;
        appendSubmittedMessage(submittedProductsMessage, 'user-message', true); // Pass true to show undo button
        collectedData.productInterest = selectedProducts; // Collect selected products
        questionStack[questionStack.length - 1].answer = selectedProducts; // Update the last question stack with answer

        document.getElementById('product-options').style.display = 'none'; // Hide options after submission
        scrollToBottom(); // Ensure scroll to bottom after hiding options

        setTimeout(() => askRoleAtLawFirm(), 1000); // Proceed to next question
    }
}

// function askState() {
//     // Push the correct question type onto the question stack
//     questionStack.push({ question: "productInterest", answer: null });
//     const typingIndicator = showTypingIndicator();
//     const messageTime = new Date(); // Capture the message time
//     setTimeout(() => {
//         removeTypingIndicator(typingIndicator);
//         // Bot message with message time
//         appendMessageWithImageAndTime("What state did the offense occur in?", 'bot-message', messageTime, true);

//         // Create dropdown for state options
//         const stateOptions = `
//         <div id="state-options" class="chat-options">
//             <select id="state-select" class="option-select">
//                 <option class="opt-cstm" value="" disabled selected>Select a state</option>
//                 <option class="opt-cstm" value="California">California</option>
//                 <option class="opt-cstm" value="Texas">Texas</option>
//                 <option class="opt-cstm" value="Florida">Florida</option>
//                 <!-- Add more states here if needed -->
//             </select>
//             <button class="submit-icon" onclick="handleStateSelection()"><img src="https://storage.googleapis.com/msgsndr/aJYHtddTenz299BOqzfz/media/66fa91a7923b423d630ec12e.png" alt="img"></button>
//         </div>
//         `;

//         // Append role options to chat content
//         const inputGroup = document.createElement('div');
//         inputGroup.innerHTML = stateOptions;
//         document.getElementById('chat-content').appendChild(inputGroup);
//         scrollToBottom(); // Ensure scroll is at the bottom after adding options
//     }, 1000);
// }




function appendSubmittedMessage(message, className, isUndo = false) {
    debugger
    const chatContent = document.getElementById('chat-content');
    const messageContainer = document.createElement('div');
    messageContainer.className = className;
    messageContainer.style.display = 'flex';
    messageContainer.style.justifyContent = 'flex-end';

    if (isUndo) {
        // Undo button to handle the undo functionality
        const undoButton = document.createElement('button');
        undoButton.className = 'undo-btn';
        undoButton.innerHTML = '<img src="https://storage.googleapis.com/msgsndr/aJYHtddTenz299BOqzfz/media/66facd71721de4859347dd07.png" alt="Undo"><p class="undop">Undo</p>';
        undoButton.onclick = () => handleUndo(); // Call handleUndo when clicked
        disablePreviousUndoButtons();
        messageContainer.appendChild(undoButton);
    }

    const messageDiv = document.createElement('div');
    messageDiv.className = 'message user-message';
    messageDiv.textContent = message;

    messageContainer.appendChild(messageDiv);
    chatContent.appendChild(messageContainer);
    scrollToBottom();
}

// function askRoleAtLawFirm() {
//     // Push the correct question type onto the question stack
//     questionStack.push({ question: "productInterest", answer: null });
    
//     const typingIndicator = showTypingIndicator();
//     const messageTime = new Date(); // Capture the message time

//     setTimeout(() => {
//         removeTypingIndicator(typingIndicator);

//         // Bot message with message time
//         appendMessageWithImageAndTime("What do you do at your Law Firm?", 'bot-message', messageTime, true);

//         // Create dropdown for role options
//         const roleOptions = `
//         <div id="role-options" class="chat-options">
//             <select id="role-select" class="option-select">
//                 <option class="opt-cstm" value="" disabled selected>Select your role</option>
//                 <option class="opt-cstm" value="Owner">Owner</option>
//                 <option class="opt-cstm" value="Marketer">Marketer</option>
//                 <option class="opt-cstm" value="Partner">Partner</option>
//                 <option class="opt-cstm" value="Other">Other</option>
//             </select>
//             <button class="submit-icon" onclick="handleRoleSelection()">
//               <img src="https://storage.googleapis.com/msgsndr/aJYHtddTenz299BOqzfz/media/66fa91a7923b423d630ec12e.png" alt="submit">
//             </button>
//         </div>
//         `;

//         // Append role options to chat content
//         const inputGroup = document.createElement('div');
//         inputGroup.innerHTML = roleOptions;
//         document.getElementById('chat-content').appendChild(inputGroup);
//         scrollToBottom(); // Ensure scroll is at the bottom after adding options
//     }, 1000);
// }

// // Function to handle role selection with undo functionality
// function handleRoleSelection() {
//     const role = document.getElementById('role-select').value;
    
//     if (!role) {
//         alert('Please select a role');
//         return;
//     }

//     // Remove the role options immediately
//     document.getElementById('role-options').remove();

//     // Append the user's choice to the chat
//     appendSubmittedMessage(role, 'user-message', true); // Add 'true' to show the undo button
//     collectedData.roleAtLawFirm = role; // Collect the role selection
//     questionStack[questionStack.length - 1].answer = role; // Update the last question stack with answer

//     // Scroll to the bottom after user's choice is added
//     scrollToBottom();

//     // Proceed to the next question (ask for the name)
//     setTimeout(() => askFullName(), 1000);
// }


function handleUndo() {
    if (questionStack.length > 0) {
        const lastQuestion = questionStack.pop();
        delete collectedData[lastQuestion.question];

        const chatContent = document.getElementById('chat-content');
        
        // Set the number of elements to remove based on the question type
        let elementsToRemove;
        switch (lastQuestion.question) {
            case "initialQuestion":
                elementsToRemove = 9;
                break;
            case "recommenderQuestion":
                elementsToRemove = 6; // Remove 9 elements for initial question and recommender name
                break;
                case "forSelfOrOther":
                    elementsToRemove = 8;
                    break;    
            case "websiteVisitors":
                elementsToRemove = 10; // Remove 10 elements for website visitors question
                break;
            default:
                elementsToRemove = 5; // Default to 5 elements for other questions
                break;
        }

        // Remove the specified number of elements associated with the last question type
        while (elementsToRemove > 0 && chatContent.lastChild) {
            chatContent.removeChild(chatContent.lastChild);
            elementsToRemove--;
        }

        // Re-ask the last question based on the question type
        askQuestion(lastQuestion.question);
    } else {
        console.log("No previous question to undo.");
    }
}

function askQuestion(type) {
    debugger
    switch (type) {
            case "situation":
                askSituation();
                break;
            case "productInterest":
                askProductInterest('cashSave');
                break;
            case "roleAtLawFirm":
                askRoleAtLawFirm();
                break;
            case "cashSave":
                askCashSave();
                break;
            case "industry":
                askIndustry();
                break;
            case "fullName":
                askFullName();
                break;
            case "phoneNumber":
                askPhoneNumber();
                break;
            case "email":
                askEmail();
                break;
            case "initialQuestion":
                askInitialQuestion();
                break;
            case "usingLiveChat":
                askInitialQuestion();
                break;
            case "leadsPerMonth":
                askLeadsPerMonth();
                break;
            case "websiteVisitors":
                askWebsiteVisitors();
                break;
            case "recommenderQuestion":
                askRecommenderQuestion();
                break;
            case "recommenderName":
                askRecommenderName();
                break;
            case "state":
               askState();
                 break;    
                 case "forSelfOrOther":
                askForSelfOrOther();
                break;
                case "nextHearingDate":
                    askNextHearingDate();
                    break;
            case "finalQuestion":
                askFinalQuestion();
                break;
                default:
                    console.warn("Unknown question type:", type);
            }
        }

// Function to show typing indicator with undo
function appendMessageWithImageAndTime(message, className, messageTime, isOption = true) {
    const messageContainer = document.createElement('div');
    messageContainer.className = className;

    const messageText = document.createElement('p');
    messageText.textContent = message;
    messageContainer.appendChild(messageText);

    if (isOption) {
        // Add undo button for option responses
        const undoButton = document.createElement('button');
        undoButton.className = 'undo-btn';
        undoButton.innerHTML = '<img src="https://storage.googleapis.com/msgsndr/aJYHtddTenz299BOqzfz/media/66facd71721de4859347dd07.png" alt="Undo"><p>Undo</p>';
        undoButton.onclick = () => {
            renderChatWidget(); // Restart the chat on Undo
        };
        disablePreviousUndoButtons();
        messageContainer.appendChild(undoButton);
    }

    const timeElement = document.createElement('span');
    timeElement.textContent = `Sent at: ${messageTime.toLocaleTimeString()}`;
    timeElement.className = 'message-time';
    messageContainer.appendChild(timeElement);

    document.getElementById('chat-content').appendChild(messageContainer);
    scrollToBottom(); // Scroll to bottom after appending message
}

function removeInputGroup() {
    const inputGroup = document.querySelector('.input-group');
    if (inputGroup) {
        inputGroup.remove();
    }
}

function appendMessage(message, className) {
    const messageContainer = document.createElement('div');
    messageContainer.classList.add(className, 'message-container');

    // Create message text element
    const messageText = document.createElement('div');
    messageText.classList.add('message-text');
    messageText.textContent = message;

    // Create time element
    const timestamp = document.createElement('span');
    timestamp.classList.add('time-ago');
    timestamp.textContent = formatTimeAgo(new Date()); // Display time ago based on current time

    // Append text and time to the message container
    messageContainer.appendChild(messageText);
    messageContainer.appendChild(timestamp);

    // Append to chat content
    document.getElementById('chat-content').appendChild(messageContainer);
    scrollToBottom();
}

// Helper function to format time as "time ago"
function formatTimeAgo(date) {
    const now = new Date();
    const seconds = Math.floor((now - date) / 1000);

    if (seconds < 60) return `${seconds} seconds ago`;
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return `${minutes} minutes ago`;
    const hours = Math.floor(minutes / 60);
    return `${hours} hours ago`;
}

function askCashSave() { 
    // Push the correct question type onto the question stack
    questionStack.push({ question: "situation", answer: null });

    const typingIndicator = showTypingIndicator();
    const messageTime = new Date(); // Capture the message time

    setTimeout(() => {
        removeTypingIndicator(typingIndicator);

        // Bot message with message time and an option to display image
        appendMessageWithImageAndTime("What if I could help you save some cash 💵?", 'bot-message', messageTime, true);

        // Create dropdown for cash save option
        const cashSaveOption = `
        <div id="cash-save-options" class="chat-options">
            <select id="cash-save-select" class="option-select">
                <option class="opt-cstm" value="" disabled selected>Select an option</option>
                <option class="opt-cstm" value="Okay, I'm listening!">Okay, I'm listening!</option>
            </select>
            <button class="submit-icon" onclick="handleCashSave()">
              <img src="https://storage.googleapis.com/msgsndr/aJYHtddTenz299BOqzfz/media/66fa91a7923b423d630ec12e.png" alt="submit">
            </button>
        </div>
        `;

        // Append cash save option to chat content
        const inputGroup = document.createElement('div');
        inputGroup.innerHTML = cashSaveOption;
        document.getElementById('chat-content').appendChild(inputGroup);
        scrollToBottom(); // Ensure scroll is at the bottom after adding options
    }, 1000);
}

// Updated handleCashSave function to handle dropdown selection
function handleCashSave() {
    const cashSaveOption = document.getElementById('cash-save-select').value;
    
    if (!cashSaveOption) {
        alert('Please select an option');
        return;
    }

    // Remove the cash save options immediately
    document.getElementById('cash-save-options').remove();

    // Append the user's choice to the chat
    appendSubmittedMessage(cashSaveOption, 'user-message', true); // Add 'true' to show the undo button
    collectedData.cashSaveInterest = true; // Collect this data point
    questionStack[questionStack.length - 1].answer = cashSaveOption; // Update the last question stack with answer

    // Scroll to the bottom after user's choice is added
    scrollToBottom();

    // Proceed to the next question (ask for the product interest or other follow-up)
    setTimeout(() => askProductInterest("cashSave"), 1000);
}




function askIndustry() {
    // Push the question onto the question stack
    questionStack.push({ question: "situation", answer: null });
    const typingIndicator = showTypingIndicator();
    setTimeout(() => {
        removeTypingIndicator(typingIndicator);
        
        const messageTime = new Date(); // Capture the message time
        appendMessageWithImageAndTime("We serve a variety of industries! What is your industry?", 'bot-message', messageTime, true);
        
        const industryOptions = `
        <div id="industry-options" class="chat-options">
            <select id="industry-select" class="option-select">
                <option class="opt-cstm" value="" disabled selected>Select an industry</option>
                <option class="opt-cstm" value="Home & Construction">Home & Construction</option>
                <option class="opt-cstm" value="Doctor">Doctor</option>
                <option class="opt-cstm" value="Chiropractic">Chiropractic</option>
                <option class="opt-cstm" value="Medical">Medical</option>
                <option class="opt-cstm" value="Marketing & Advertising">Marketing & Advertising</option>
                <option class="opt-cstm" value="Professional services">Professional services</option>
                <option class="opt-cstm" value="Colleges">Colleges</option>
                <option class="opt-cstm" value="Other">Other</option>
            </select>
            <button class="submit-icon" onclick="handleIndustry()">
              <img src="https://storage.googleapis.com/msgsndr/aJYHtddTenz299BOqzfz/media/66fa91a7923b423d630ec12e.png" alt="submit">
            </button>
        </div>
        `;
        
        // Append options to chat content
        const inputGroup = document.createElement('div');
        inputGroup.innerHTML = industryOptions;
        document.getElementById('chat-content').appendChild(inputGroup);
        scrollToBottom();
    }, 1000);
}

function handleIndustry() {
    const industry = document.getElementById('industry-select').value;
    if (!industry) {
        alert('Please select an industry');
        return;
    }

    // Store the industry specifically
    document.getElementById('industry-options').style.display = 'none';
    appendSubmittedMessage(industry, 'user-message', true);
    collectedData.industry = industry; // Only set the industry data
    questionStack[questionStack.length - 1].answer = industry;

    scrollToBottom();
    setTimeout(() => askFullName("industry"), 1000);
}




// New function to append message with image and "time ago"
function appendMessageWithImageAndTime(message, className, messageTime, isOption) {
    const messageContainer = document.createElement('div');
    messageContainer.className = className;

    // Create the message text
    const messageText = document.createElement('p');
    messageText.textContent = message;
    messageContainer.appendChild(messageText);

    // Add user profile image
    const userImage = document.createElement('img');
    userImage.src = 'https://storage.googleapis.com/msgsndr/yMsNTtrF5fKA28L0OMsP/media/6730641921c625d9aaa7e634.jpeg';  // Replace with actual image path
    userImage.alt = 'User';
    userImage.className = 'user-image';  // You can style this in CSS
    messageContainer.appendChild(userImage);


    
    // Add "time ago" element
    const timeElement = document.createElement('span');
    timeElement.className = 'message-time';  // Style in CSS
    messageContainer.appendChild(timeElement);

    // Append the message container
    document.getElementById('chat-content').appendChild(messageContainer);
    scrollToBottom();

    // Update the "time ago" label initially and every minute
    updateTimeAgo(timeElement, messageTime);
    setInterval(() => updateTimeAgo(timeElement, messageTime), 60000);  // Update every minute

    
}

// Function to calculate and display "time ago"
function updateTimeAgo(element, messageTime) {
    const now = new Date();
    const timeDifference = Math.floor((now - messageTime) / 1000); // Time difference in seconds

    let timeAgo = '';
    if (timeDifference < 60) {
        timeAgo = 'just now';
    } else if (timeDifference < 3600) {
        const minutes = Math.floor(timeDifference / 60);
        timeAgo = `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    } else if (timeDifference < 86400) {
        const hours = Math.floor(timeDifference / 3600);
        timeAgo = `${hours} hour${hours > 1 ? 's' : ''} ago`;
    } else {
        const days = Math.floor(timeDifference / 86400);
        timeAgo = `${days} day${days > 1 ? 's' : ''} ago`;
    }

    element.textContent = timeAgo;
}

function askPhoneNumber() {
    questionStack.push({ question: "situation", answer: null });
    const typingIndicator = showTypingIndicator();
    setTimeout(() => {
        removeTypingIndicator(typingIndicator);
        const messageTime = new Date(); // Capture the message time

        // Bot message with isOption = true for question
        appendMessageWithImageAndTime("What's the best phone number to reach you?", 'bot-message', messageTime, true);

        // Create the input group
        const inputGroup = createInputGroup('Type Phone Number', handlePhoneNumber, '', 'tel', true); // Changed 'text' to 'tel' for better input control

        // Change the input class of the phone number input to 'phone-num'
        const phoneNumberInput = inputGroup.querySelector('input'); // Target the phone number input field
        if (phoneNumberInput) {
            phoneNumberInput.classList.remove('input-field'); // Remove the default 'input-field' class
            phoneNumberInput.classList.add('phone-num'); // Add the 'phone-num' class

            // Only allow numeric input (phone numbers)
            phoneNumberInput.addEventListener('input', (event) => {
                event.target.value = event.target.value.replace(/[^0-9]/g, ''); // Remove non-numeric characters
            });
        }

        document.getElementById('chat-content').appendChild(inputGroup);
        scrollToBottom();
    }, 1000);
}

function handlePhoneNumber(phoneNumber) {
    const countryCode = document.getElementById('country-code-select').value; // Use only the country code select element
    if (!phoneNumber.trim() || phoneNumber.length < 7) {
        alert("Please enter a valid phone number.");
        return;
    }

    appendMessage(`${countryCode} ${phoneNumber}`, 'user-message', false); // Append phone with country code
    collectedData.phone = `${countryCode} ${phoneNumber}`; // Store only phone number and correct country code
    removeInputGroup();
    setTimeout(() => askEmail(), 1000);
}

// function askEmail() {
//     questionStack.push({ question: "situation", answer: null });
//     const typingIndicator = showTypingIndicator();
//     const messageTime = new Date(); // Capture the message time
//     setTimeout(() => {
//         removeTypingIndicator(typingIndicator);

//         // Bot message with isOption = true for question
//         appendMessageWithImageAndTime("And an email address?", 'bot-message', messageTime, true);

//         const inputGroup = createInputGroup('Type Email Address', handleEmail, '', 'email');
//         document.getElementById('chat-content').appendChild(inputGroup);
//         scrollToBottom();
//     }, 1000);
// }

// function handleEmail(email) {
//     if (!email.trim() || !validateEmail(email)) {
//         alert("Please enter a valid email address.");
//         return;
//     }

//     // Append the email as a user message with isOption = false for typed input
//     appendMessage(email, 'user-message', false);
//     collectedData.email = email;
//     removeInputGroup();
//     setTimeout(() => askInitialQuestion(), 1000);
// }

function askInitialQuestion() {
    questionStack.push({ question: "usingLiveChat", answer: null });
    const messageTime = new Date(); // Capture the message time
    
    // Append message with unique class for "usingLiveChat" question
    appendMessageWithImageAndTime(
        "Please answer a couple of questions to help us send you more information about The Intake Bot™! Are you currently using a live chat on your website?", 
        'bot-message question-usingLiveChat', 
        messageTime
    );

    // Create dropdown for live chat options
    const initialOptions = `
        <div id="live-chat-options" class="chat-options question-usingLiveChat">
            <select id="live-chat-select" class="option-select">
                <option class="opt-cstm" value="" disabled selected>Select an option</option>
                <option class="opt-cstm" value="Yes, We have chat">Yes, We have chat</option>
                <option class="opt-cstm" value="No">No</option>
            </select>
            <button class="submit-icon" onclick="handleLiveChatOption()">
              <img src="https://storage.googleapis.com/msgsndr/aJYHtddTenz299BOqzfz/media/66fa91a7923b423d630ec12e.png" alt="submit">
            </button>
        </div>
    `;

    document.getElementById('chat-content').insertAdjacentHTML('beforeend', initialOptions);
    scrollToBottom();
}

// Updated handleLiveChatOption function to handle dropdown selection
function handleLiveChatOption() {
    const liveChatOption = document.getElementById('live-chat-select').value;
    
    if (!liveChatOption) {
        alert('Please select an option');
        return;
    }

    // Remove the options after selection
    document.getElementById('live-chat-options').remove();
    
    // Append the user's choice with the unique class
    appendSubmittedMessage(liveChatOption, 'user-message question-usingLiveChat', true); // Add 'true' to show the Undo button
    collectedData.usingLiveChat = liveChatOption; // Collect the user's choice
    questionStack[questionStack.length - 1].answer = liveChatOption; // Update the last question stack with answer

    scrollToBottom();

    // Proceed based on the selected option
    if (liveChatOption === 'Yes, We have chat') {
        setTimeout(() => askWebsiteVisitors(), 1000);
    } else {
        setTimeout(() => askWebsiteVisitors(), 1000);
    }
}

function askLeadsPerMonth() {
    // Push the question onto the question stack
    questionStack.push({ question: "initialQuestion", answer: null });
    const messageTime = new Date(); // Capture the message time
    appendMessageWithImageAndTime("How many leads do you receive from your chat every month? A rough estimate works!", 'bot-message', messageTime);

    const inputGroup = createInputGroup('Enter lead number', handleLeadsInput);
    document.getElementById('chat-content').appendChild(inputGroup);
    scrollToBottom();
}

function handleLeadsInput(leadNumber) {
    if (!leadNumber.trim()) {
        alert("Please enter a valid number.");
        return;
    }

    // Append the user's input with Undo functionality
    appendSubmittedMessage(`${leadNumber} leads`, 'user-message', true); // Add 'true' to show the Undo button
    collectedData.leadsPerMonth = leadNumber; // Store lead number
    questionStack[questionStack.length - 1].answer = leadNumber; // Update the last question stack with the answer

    removeInputGroup(); // Remove the input field
    scrollToBottom();

    setTimeout(() => askRecommenderQuestion(), 1000); // Move to the next question
}

function askWebsiteVisitors() {
    questionStack.push({ question: "initialQuestion", answer: null });
    appendMessageWithImageAndTime("How many website visitors do you have on your site every month?", 'bot-message');

    const visitorSlider = `
        <div id="visitor-slider-container" class="visitor-slider">
            <input type="range" min="0" max="50000" step="100" value="0" id="visitorRange" oninput="updateVisitorCount(this.value)">
            <span id="visitorCount">0</span> visitors
        </div>
    `;
    document.getElementById('chat-content').insertAdjacentHTML('beforeend', visitorSlider);
    document.getElementById('chat-content').insertAdjacentHTML('beforeend', `<button id="submitVisitorBtn" class="option-btn" onclick="submitVisitorCount()">Submit</button>`);
}

function updateVisitorCount(value) {
    document.getElementById('visitorCount').innerHTML = value;
}

function submitVisitorCount() {
    const visitors = document.getElementById('visitorRange').value;
    
    // Append the user's input with Undo functionality
    appendSubmittedMessage(`${visitors} visitors`, 'user-message', true); // Add 'true' to show the Undo button
    collectedData.visitorsPerMonth = visitors; // Store the visitor count
    questionStack[questionStack.length - 1].answer = visitors; // Update the last question stack with the answer

    // Hide the slider and submit button after submission
    document.getElementById('visitor-slider-container').style.display = 'none';
    document.getElementById('submitVisitorBtn').style.display = 'none';

    // Proceed to the next question
    scrollToBottom();
    setTimeout(() => askRecommenderQuestion(), 1000);
}

function askRecommenderQuestion() {
    // Push the question onto the question stack
    questionStack.push({ question: "websiteVisitors", answer: null });
    const messageTime = new Date(); // Capture the message time
    appendMessageWithImageAndTime("Did anyone recommend The Intake Bot™ to you?", 'bot-message', messageTime);

    // Create dropdown for recommender options
    const recommenderOptions = `
        <div id="recommender-options" class="chat-options">
            <select id="recommender-select" class="option-select">
                <option class="opt-cstm" value="" disabled selected>Select an option</option>
                <option class="opt-cstm" value="Yes">Yes, someone did</option>
                <option class="opt-cstm" value="Nope">Nope</option>
            </select>
            <button class="submit-icon" onclick="handleRecommenderOption()">
              <img src="https://storage.googleapis.com/msgsndr/aJYHtddTenz299BOqzfz/media/66fa91a7923b423d630ec12e.png" alt="submit">
            </button>
        </div>
    `;
    document.getElementById('chat-content').insertAdjacentHTML('beforeend', recommenderOptions);
    scrollToBottom();
}

// Updated handleRecommenderOption function to handle dropdown selection
function handleRecommenderOption() {
    const recommenderOption = document.getElementById('recommender-select').value;
    
    if (!recommenderOption) {
        alert('Please select an option');
        return;
    }

    // Remove the options after selection
    document.getElementById('recommender-options').remove(); // Hide options after selection

    // Append the user's choice with Undo functionality
    appendSubmittedMessage(recommenderOption, 'user-message', true); // Add 'true' to show the Undo button
    collectedData.recommender = recommenderOption; // Collect the answer
    questionStack[questionStack.length - 1].answer = recommenderOption; // Update the last question stack with the answer

    if (recommenderOption === 'Yes') {
        setTimeout(() => askRecommenderName(), 1000);
    } else {
        setTimeout(() => askFinalQuestion(), 1000);
    }
}


function askRecommenderName() {
    questionStack.push({ question: "recommenderQuestion", answer: null });
    const messageTime = new Date(); // Capture the message time
    appendMessageWithImageAndTime("What's their name? We'd love to send them a thank you note!", 'bot-message', messageTime);

    const inputGroup = createInputGroup('Enter name', handleRecommenderNameInput);
    document.getElementById('chat-content').appendChild(inputGroup);
    scrollToBottom();
}

function handleRecommenderNameInput(name) {
    if (!name.trim()) {
        alert("Please enter a valid name.");
        return;
    }

    appendMessage(name, 'user-message', false); // Show the name input
    collectedData.recommenderName = name; // Store recommender name
    removeInputGroup(); // Remove the input field
    setTimeout(() => askFinalQuestion(), 1000); // Move to the next question
}

function askFinalQuestion() {
    questionStack.push({ question: "recommenderQuestion", answer: null });
    const messageTime = new Date(); // Capture the message time
    appendMessageWithImageAndTime("Are there any other questions I should pass to my team before they reach out?", 'bot-message', messageTime);

    const inputGroup = createInputGroup('Type here...', handleFinalQuestionInput);
    document.getElementById('chat-content').appendChild(inputGroup);
    scrollToBottom();
}

function handleFinalQuestionInput(finalQuestion) {
    appendMessage(finalQuestion, 'user-message', false); // Show the final question input
    collectedData.finalQuestion = finalQuestion; // Store final question
    removeInputGroup(); // Remove the input field

    // Thank you message at the end
    const messageTime = new Date(); // Capture the message time
    setTimeout(() => {
        submitData(); // Automatically submit data after the last question
    }, 1000);
}

function submitData() {
    console.log("Final collectedData before submission:", collectedData);

    // Define questions for each field
    const questions = {
        situation: "Are you looking to grow your Law Firm?",
        productInterest: "Which Intake Bot™ products are you interested in?",
        roleAtLawFirm: "What do you do at your Law Firm?",
        cashSaveInterest: "What if I could help you save some cash?",
        industry: "What is your industry?",
        fullName: "Great! Your business is qualified. I'd like to send you a limited-time special offer: 20% off your first month. May I ask for your full name (first and last)?",
        phone: "What's the best phone number to reach you?",
        email: "And an email address?",
        usingLiveChat: "Are you currently using a live chat on your website?",
        leadsPerMonth: "How many leads do you receive from your chat every month?",
        visitorsPerMonth: "How many website visitors do you have on your site every month?",
        recommender: "Did anyone recommend The Intake Bot™ to you?",
        recommenderName: "What's their name?",
        finalQuestion: "Are there any other questions I should pass to my team before they reach out?"
    };

    // Generate the payload dynamically, including "Skipped" for unanswered questions
    const payload = {
        "Situation Question": questions.situation,
        "Situation Answer": collectedData.situation || "Skipped",
        "Product Interest Question": questions.productInterest,
        "Product Interest Answer": (collectedData.productInterest || []).join(', ') || "Skipped",
        "Role at Law Firm Question": questions.roleAtLawFirm,
        "Role at Law Firm Answer": collectedData.roleAtLawFirm || "Skipped",
        "Cash Save Interest Question": questions.cashSaveInterest,
        "Cash Save Interest Answer": collectedData.cashSaveInterest || "Skipped",
        "Industry Question": questions.industry,
        "Industry Answer": collectedData.industry || "Skipped",
        "Full Name Question": questions.fullName,
        "Full Name Answer": `${collectedData.firstName || ''} ${collectedData.lastName || ''}`.trim() || "Skipped",
        "Phone Number Question": questions.phone,
        "Phone Number Answer": collectedData.phone || "Skipped",
        "Email Question": questions.email,
        "Email Answer": collectedData.email || "Skipped",
        "Using Live Chat Question": questions.usingLiveChat,
        "Using Live Chat Answer": collectedData.usingLiveChat || "Skipped",
        "Leads Per Month Question": questions.leadsPerMonth,
        "Leads Per Month Answer": collectedData.leadsPerMonth || "Skipped",
        "Website Visitors Per Month Question": questions.visitorsPerMonth,
        "Website Visitors Per Month Answer": collectedData.visitorsPerMonth || "Skipped",
        "Recommender Question": questions.recommender,
        "Recommender Answer": collectedData.recommender || "Skipped",
        "Recommender Name Question": questions.recommenderName,
        "Recommender Name Answer": collectedData.recommenderName || "Skipped",
        "Final Question Question": questions.finalQuestion,
        "Final Question Answer": collectedData.finalQuestion || "Skipped"
    };

    console.log("Payload to be submitted:", payload);

    // Send the payload to the webhook
    fetch("https://connect.pabbly.com/workflow/sendwebhookdata/IjU3NjYwNTZjMDYzMzA0M2Q1MjZlNTUzNzUxMzQi_pc", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    })
    .then(response => {
        if (!response.ok) throw new Error('Network response was not ok.');
        return response.json();
    })
    .then(data => {
        const messageTime = new Date();
        appendMessageWithImageAndTime("Thanks for sharing this information with us. Expect to hear from one of us soon to see how we can help - Thanks! 🤝", 'bot-message', messageTime);
        addCustomHTMLSection(); // Show the thank-you section with scheduling option
    })
    .catch(error => {
        console.error('Error:', error);
        const messageTime = new Date();
        appendMessageWithImageAndTime("Error submitting data. Please refresh the page and try again.", 'bot-message', messageTime);
    });
}




function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

function createInputGroup(placeholder, callback, value = '', type = 'text', includeCountryCode = false, secondPlaceholder = '') {
  const inputGroup = document.createElement('div');
  inputGroup.className = 'input-group';

  if (includeCountryCode) {
      const countryCodeDropdown = createCountryCodeDropdown();
      inputGroup.appendChild(countryCodeDropdown);
  }

  const inputField = document.createElement('input');
  inputField.className = 'input-field';
  inputField.type = type;
  inputField.value = value;
  inputField.placeholder = placeholder;  // Placeholder for the input
  inputField.style = 'padding: 10px; border-radius: 10px; border: 1px solid #ddd; width: 100%; margin-right: 10px; display: inline-block; box-sizing: border-box;';
  inputGroup.appendChild(inputField);

  // Listen for the "Enter" key to trigger callback
  inputField.addEventListener('keypress', function (event) {
      if (event.key === 'Enter') {
          event.preventDefault(); // Prevent default "Enter" behavior
          if (secondPlaceholder) {
              callback(inputField.value, secondInputField.value); // If second input exists
          } else {
              callback(inputField.value, document.querySelector('select')?.value || ''); // For single input
          }
      }
  });

  if (secondPlaceholder) {
      const secondInputField = document.createElement('input');
      secondInputField.className = 'input-field';
      secondInputField.type = type;
      secondInputField.placeholder = secondPlaceholder;
      secondInputField.style = 'padding: 10px; border-radius: 10px; border: 1px solid #ddd; width: 48%; display: inline-block; box-sizing: border-box;';
      inputGroup.appendChild(secondInputField);

      const submitIcon = createSubmitIcon(() => callback(inputField.value, secondInputField.value));
      inputGroup.appendChild(submitIcon);
  } else {
      const submitIcon = createSubmitIcon(() => callback(inputField.value, document.querySelector('select')?.value || ''));
      inputGroup.appendChild(submitIcon);
  }

  return inputGroup;
}

function createCountryCodeDropdown() {
    const dropdown = document.createElement('select');
    dropdown.className = 'country-code-dropdown';
    dropdown.id = 'country-code-select'; // Set a unique ID for the country code

    const countryCodes = [
        { code: '+1', country: 'USA' },
        { code: '+44', country: 'UK' },
        { code: '+91', country: 'India' },
        { code: '+93', country: 'Afghanistan' },
        { code: '+355', country: 'Albania' },
        { code: '+213', country: 'Algeria' },
        { code: '+376', country: 'Andorra' },
        { code: '+244', country: 'Angola' },
        { code: '+54', country: 'Argentina' },
        { code: '+374', country: 'Armenia' },
        { code: '+297', country: 'Aruba' },
        { code: '+61', country: 'Australia' },
        { code: '+43', country: 'Austria' },
        { code: '+994', country: 'Azerbaijan' },
        { code: '+973', country: 'Bahrain' },
        { code: '+880', country: 'Bangladesh' },
        { code: '+375', country: 'Belarus' },
        { code: '+32', country: 'Belgium' },
        { code: '+501', country: 'Belize' },
        { code: '+229', country: 'Benin' },
        { code: '+975', country: 'Bhutan' },
        { code: '+591', country: 'Bolivia' },
        { code: '+387', country: 'Bosnia and Herzegovina' },
        { code: '+267', country: 'Botswana' },
        { code: '+55', country: 'Brazil' },
        { code: '+673', country: 'Brunei' },
        { code: '+359', country: 'Bulgaria' },
        { code: '+226', country: 'Burkina Faso' },
        { code: '+257', country: 'Burundi' },
        { code: '+855', country: 'Cambodia' },
        { code: '+237', country: 'Cameroon' },
        { code: '+1', country: 'Canada' },
        { code: '+238', country: 'Cape Verde' },
        { code: '+236', country: 'Central African Republic' },
        { code: '+235', country: 'Chad' },
        { code: '+56', country: 'Chile' },
        { code: '+86', country: 'China' },
        { code: '+57', country: 'Colombia' },
        { code: '+269', country: 'Comoros' },
        { code: '+242', country: 'Congo' },
        { code: '+682', country: 'Cook Islands' },
        { code: '+506', country: 'Costa Rica' },
        { code: '+385', country: 'Croatia' },
        { code: '+53', country: 'Cuba' },
        { code: '+357', country: 'Cyprus' },
        { code: '+420', country: 'Czech Republic' },
        { code: '+45', country: 'Denmark' },
        { code: '+253', country: 'Djibouti' },
        { code: '+593', country: 'Ecuador' },
        { code: '+20', country: 'Egypt' },
        { code: '+503', country: 'El Salvador' },
        { code: '+240', country: 'Equatorial Guinea' },
        { code: '+291', country: 'Eritrea' },
        { code: '+372', country: 'Estonia' },
        { code: '+251', country: 'Ethiopia' },
        { code: '+679', country: 'Fiji' },
        { code: '+358', country: 'Finland' },
        { code: '+33', country: 'France' },
        { code: '+241', country: 'Gabon' },
        { code: '+220', country: 'Gambia' },
        { code: '+995', country: 'Georgia' },
        { code: '+49', country: 'Germany' },
        { code: '+233', country: 'Ghana' },
        { code: '+30', country: 'Greece' },
        { code: '+299', country: 'Greenland' },
        { code: '+502', country: 'Guatemala' },
        { code: '+224', country: 'Guinea' },
        { code: '+245', country: 'Guinea-Bissau' },
        { code: '+592', country: 'Guyana' },
        { code: '+509', country: 'Haiti' },
        { code: '+504', country: 'Honduras' },
        { code: '+852', country: 'Hong Kong' },
        { code: '+36', country: 'Hungary' },
        { code: '+354', country: 'Iceland' },
        { code: '+62', country: 'Indonesia' },
        { code: '+98', country: 'Iran' },
        { code: '+964', country: 'Iraq' },
        { code: '+353', country: 'Ireland' },
        { code: '+972', country: 'Israel' },
        { code: '+39', country: 'Italy' },
        { code: '+81', country: 'Japan' },
        { code: '+962', country: 'Jordan' },
        { code: '+7', country: 'Kazakhstan' },
        { code: '+254', country: 'Kenya' },
        { code: '+686', country: 'Kiribati' },
        { code: '+383', country: 'Kosovo' },
        { code: '+965', country: 'Kuwait' },
        { code: '+996', country: 'Kyrgyzstan' },
        { code: '+856', country: 'Laos' },
        { code: '+371', country: 'Latvia' },
        { code: '+961', country: 'Lebanon' },
        { code: '+266', country: 'Lesotho' },
        { code: '+231', country: 'Liberia' },
        { code: '+218', country: 'Libya' },
        { code: '+423', country: 'Liechtenstein' },
        { code: '+370', country: 'Lithuania' },
        { code: '+352', country: 'Luxembourg' },
        { code: '+853', country: 'Macau' },
        { code: '+389', country: 'Macedonia' },
        { code: '+261', country: 'Madagascar' },
        { code: '+265', country: 'MaLaw Firmi' },
        { code: '+60', country: 'Malaysia' },
        { code: '+960', country: 'Maldives' },
        { code: '+223', country: 'Mali' },
        { code: '+356', country: 'Malta' },
        { code: '+692', country: 'Marshall Islands' },
        { code: '+222', country: 'Mauritania' },
        { code: '+230', country: 'Mauritius' },
        { code: '+52', country: 'Mexico' },
        { code: '+691', country: 'Micronesia' },
        { code: '+373', country: 'Moldova' },
        { code: '+377', country: 'Monaco' },
        { code: '+976', country: 'Mongolia' },
        { code: '+382', country: 'Montenegro' },
        { code: '+212', country: 'Morocco' },
        { code: '+258', country: 'Mozambique' },
        { code: '+95', country: 'Myanmar' },
        { code: '+264', country: 'Namibia' },
        { code: '+674', country: 'Nauru' },
        { code: '+977', country: 'Nepal' },
        { code: '+31', country: 'Netherlands' },
        { code: '+64', country: 'New Zealand' },
        { code: '+505', country: 'Nicaragua' },
        { code: '+227', country: 'Niger' },
        { code: '+234', country: 'Nigeria' },
        { code: '+683', country: 'Niue' },
        { code: '+850', country: 'North Korea' },
        { code: '+47', country: 'Norway' },
        { code: '+968', country: 'Oman' },
        { code: '+92', country: 'Pakistan' },
        { code: '+680', country: 'Palau' },
        { code: '+507', country: 'Panama' },
        { code: '+675', country: 'Papua New Guinea' },
        { code: '+595', country: 'Paraguay' },
        { code: '+51', country: 'Peru' },
        { code: '+63', country: 'Philippines' },
        { code: '+48', country: 'Poland' },
        { code: '+351', country: 'Portugal' },
        { code: '+974', country: 'Qatar' },
        { code: '+40', country: 'Romania' },
        { code: '+7', country: 'Russia' },
        { code: '+250', country: 'Rwanda' },
        { code: '+685', country: 'Samoa' },
        { code: '+378', country: 'San Marino' },
        { code: '+239', country: 'Sao Tome and Principe' },
        { code: '+966', country: 'Saudi Arabia' },
        { code: '+221', country: 'Senegal' },
        { code: '+381', country: 'Serbia' },
        { code: '+248', country: 'Seychelles' },
        { code: '+232', country: 'Sierra Leone' },
        { code: '+65', country: 'Singapore' },
        { code: '+421', country: 'Slovakia' },
        { code: '+386', country: 'Slovenia' },
        { code: '+677', country: 'Solomon Islands' },
        { code: '+252', country: 'Somalia' },
        { code: '+27', country: 'South Africa' },
        { code: '+82', country: 'South Korea' },
        { code: '+34', country: 'Spain' },
        { code: '+94', country: 'Sri Lanka' },
        { code: '+249', country: 'Sudan' },
        { code: '+597', country: 'Suriname' },
        { code: '+268', country: 'Swaziland' },
        { code: '+46', country: 'Sweden' },
        { code: '+41', country: 'Switzerland' },
        { code: '+963', country: 'Syria' },
        { code: '+886', country: 'Taiwan' },
        { code: '+992', country: 'Tajikistan' },
        { code: '+255', country: 'Tanzania' },
        { code: '+66', country: 'Thailand' },
        { code: '+228', country: 'Togo' },
        { code: '+676', country: 'Tonga' },
        { code: '+216', country: 'Tunisia' },
        { code: '+90', country: 'Turkey' },
        { code: '+993', country: 'Turkmenistan' },
        { code: '+688', country: 'Tuvalu' },
        { code: '+256', country: 'Uganda' },
        { code: '+380', country: 'Ukraine' },
        { code: '+971', country: 'United Arab Emirates' },
        { code: '+598', country: 'Uruguay' },
        { code: '+998', country: 'Uzbekistan' },
        { code: '+678', country: 'Vanuatu' },
        { code: '+58', country: 'Venezuela' },
        { code: '+84', country: 'Vietnam' },
        { code: '+967', country: 'Yemen' },
        { code: '+260', country: 'Zambia' },
        { code: '+263', country: 'Zimbabwe' }
    ];

    countryCodes.forEach(({ code, country }) => {
        const option = document.createElement('option');
        option.value = code;
        option.textContent = `${code} (${country})`;
        dropdown.appendChild(option);
    });

    return dropdown;
}

function createSubmitIcon(callback) {
    const submitIcon = document.createElement('div');
    submitIcon.className = 'submit-icon';
    const iconImg = document.createElement('img');
    iconImg.src = 'https://storage.googleapis.com/msgsndr/aJYHtddTenz299BOqzfz/media/66fa91a7923b423d630ec12e.png';
    submitIcon.appendChild(iconImg);
    submitIcon.onclick = callback;
    return submitIcon;
}

function removeInputGroup() {
    const inputGroup = document.querySelector('.input-group');
    if (inputGroup) {
        inputGroup.remove();
    }
}

function removeOptions() {
    const options = document.querySelector('.chat-options');
    if (options) {
        options.remove();
    }
}

function appendMessage(text, className, isOption = false) {
    
    const chatContent = document.getElementById('chat-content');
    const messageContainer = document.createElement('div'); // Container for message and button
    messageContainer.className = `message-container ${className}`;
    messageContainer.style.display = 'flex'; // Use flexbox for alignment

    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${className}`;
    messageDiv.textContent = text;

    if (className === 'user-message') {
        // Align user messages to the right
        messageContainer.style.justifyContent = 'flex-end';

        const actionButton = document.createElement('button');
        
        if (isOption) {
            // Use setTimeout to delay adding the Undo button
            setTimeout(() => {
                // Undo button for option responses
                actionButton.className = 'undo-btn';
                actionButton.innerHTML = '<img src="https://storage.googleapis.com/msgsndr/aJYHtddTenz299BOqzfz/media/66facd71721de4859347dd07.png" alt="Undo"><p class="undop">Undo</p>';
                actionButton.onclick = () => {
                    renderChatWidget(); // Restart the chat on Undo
                };
                disablePreviousUndoButtons(); // Disable previous Undo buttons

                // Place undo button on the left (before the message)
                messageContainer.insertBefore(actionButton, messageDiv);
                scrollToBottom(); // Ensure scroll is updated after the button is added
            }, 1000); // 1000ms (1 second) delay
        } else {
            // Edit button for typed responses
            actionButton.className = 'edit-btn';
            actionButton.innerHTML = '<img src="https://storage.googleapis.com/msgsndr/aJYHtddTenz299BOqzfz/media/6710017e97369c4cdced00fb.png" alt="Edit">';
            actionButton.onclick = () => handleEdit(messageDiv, (newText) => {
                collectedData.situation = newText;
            });

            // Place edit button after the message
            messageContainer.appendChild(actionButton);
        }

        messageContainer.appendChild(messageDiv);
    } else {
        // For bot messages, just append the message
        messageContainer.appendChild(messageDiv);
    }

    chatContent.appendChild(messageContainer);
    scrollToBottom();
}  

function scrollToBottom() {
    const chatContent = document.getElementById('chat-content');
    requestAnimationFrame(() => {
        chatContent.scrollTop = chatContent.scrollHeight;
    });
}

function handleEdit(element, callback) {
    debugger
    // Store the current text content of the message
    const originalText = element.textContent;
    const inputField = document.createElement('input');
    inputField.className = 'input-field';
    inputField.value = originalText;
    element.parentNode.replaceChild(inputField, element);

    // Save button for the inline edit
    const saveButton = document.createElement('button');
    saveButton.textContent = 'Save';
    saveButton.className = 'save-btn';

    // Save button functionality
    saveButton.onclick = () => {
        const newText = inputField.value;
        element.textContent = newText;
        inputField.parentNode.replaceChild(element, inputField);
        saveButton.remove();
        callback(newText);  // Update the `collectedData` object
    };

    inputField.parentNode.appendChild(saveButton);
}

// Initialize video progress
function initializeVideoProgress(video, progressBar) {
    if (video && progressBar) {
        video.addEventListener('timeupdate', () => {
            const progress = (video.currentTime / video.duration) * 100;
            progressBar.style.width = `${progress}%`;
        });
    }
}

let selectedOption = ""; // Global variable to store the selected option
function selectOption(optionText, isOption) {
    debugger
    selectedOption = optionText;
    questionStack.push({ question: "service", answer: optionText }); // Track question in stack
    
    // appendSubmittedMessage(option, 'user-message', true); // Show selected option as user message
    const progressBarContainer = document.querySelector('.progress-bar-container');
    if (progressBarContainer) {
        progressBarContainer.style.display = 'none';
    }
  

  const emptyContainer = document.querySelector('.Empty-container');
  if (emptyContainer) {
      emptyContainer.style.display = 'none';
  }

  
  const playPauseButton = document.querySelector('#play-pause-btn');
  if (playPauseButton) {
      playPauseButton.style.display = 'none';
  }

  const payPauseButton = document.querySelector('#pay-pause-btn');
  if (payPauseButton) {
      payPauseButton.style.display = 'block';
  }

  const muteUnmuteButton = document.querySelector('#mute-unmute-btn');
  if (muteUnmuteButton) {
      muteUnmuteButton.style.display = 'none';
  }

  const chatHeader = document.querySelector('.chat-header');
  if (chatHeader) {
      chatHeader.classList.add('sticky-header');
  }
  
  const chatContent = document.querySelector('.chat-content');
  chatContent.style.setProperty('height', '95%', 'important'); // Set height to 95% with !important
  chatContent.style.setProperty('max-height', '95%', 'important');
  
  // Create a new div for the video container
  const videoContainer = document.createElement('div');
  videoContainer.className = 'video-container';
  videoContainer.style.position = 'relative';

  // Move the background video into the new container
  const backgroundVideo = document.getElementById('background-video');
  videoContainer.appendChild(backgroundVideo);



  // Append the icon to the button
  playPauseBtn.appendChild(playPauseIcon);

  // Style the button (optional)
  playPauseBtn.style.position = 'absolute';
  playPauseBtn.style.top = '45%';
  playPauseBtn.style.left = '20%';
  playPauseBtn.style.transform = 'translate(-50%, -50%)';

  // Append the play/pause button to the video container
  videoContainer.appendChild(playPauseBtn);

  // Insert the video container into chat content
  chatContent.insertBefore(videoContainer, chatContent.firstChild);

  // Add class for moving the video to the corner and pause it
  backgroundVideo.classList.add("move-video-to-corner");
  backgroundVideo.pause();

  // Change the message class for previous bot messages
  const elementsToChange = document.querySelectorAll('.message.ot-message');
  elementsToChange.forEach(element => {
      element.classList.replace('message', 'wec-whit');
      element.classList.remove('bot-message');
  });

  console.log("option_text:", optionText);

  appendMessage(optionText, 'user-message', isOption);
  collectedData.service = optionText;
  document.querySelector('.chat-options').innerHTML = '';

  // Call askSituation after a brief delay
  setTimeout(() => askSituation(), 1000);
}

function togglePlayPause() {
    console.log("calling togglePlayPause");

    const video = document.getElementById('background-video');
    const playPauseIcon = document.getElementById('play-pause-icon');
    
    if (video.paused) {
        video.play(); // Play the video
        playPauseIcon.src = 'https://storage.googleapis.com/msgsndr/aJYHtddTenz299BOqzfz/media/66eb060cf9de91b118c93a66.png'; // Change icon to pause
    } else {
        video.pause(); // Pause the video
        playPauseIcon.src = 'https://storage.googleapis.com/msgsndr/aJYHtddTenz299BOqzfz/media/66eb0ca1f9de91588ec93e8c.png'; // Change icon to play
    }
}

function toggleMute() {
    const video = document.getElementById('background-video');
    const muteUnmuteIcon = document.getElementById('mute-unmute-icon');

    if (video.muted) {
        video.muted = false; // Unmute the video
        muteUnmuteIcon.src = 'https://storage.googleapis.com/msgsndr/aJYHtddTenz299BOqzfz/media/66eb0d81f003010e66500af7.png'; // Set path to your unmute icon
    } else {
        video.muted = true; // Mute the video
        muteUnmuteIcon.src = 'https://storage.googleapis.com/msgsndr/aJYHtddTenz299BOqzfz/media/66eb0b2cc6a83988da4ff9fd.png'; // Set path to your mute icon
    }
}


function closeWidget() {
    toggleChatWidget(false);
}

function disablePreviousUndoButtons() {
    // Select all undo buttons that aren't already disabled
    const previousUndoButtons = document.querySelectorAll('.undo-btn:not(.disabled)');
    previousUndoButtons.forEach(button => {
        button.disabled = true;
        button.classList.add('disabled'); // Optionally add a 'disabled' style
    });
}

function initializePayPauseButton() {
    const payPauseBtn = document.getElementById('pay-pause-btn');
    if (payPauseBtn) {
        payPauseBtn.addEventListener('click', renderChatWidget); // Call renderChatWidget on click
    }
}

// Function to render the chat widget (as provided)
function renderChatWidget() {
    const chatWidgetContainer = document.getElementById('chat-widget');
    chatWidgetContainer.style.display = 'block'; // Show the chat widget

    // Clear previous content
    const chatContent = document.getElementById('chat-content');
    chatContent.style.maxHeight = '81%'; // Set max-height to 81%
    chatContent.innerHTML = ''; // Clear current content

    const chatHeader = document.getElementById('chat-header');
    if (chatHeader) {
        chatHeader.classList.remove('sticky-header');
    }
    chatHeader.innerHTML = "";

    // Video background and progress bar
    const videoBackground = document.getElementById('video-background');
    videoBackground.innerHTML = `
        <video id="background-video" autoplay loop muted>
            <source src="https://storage.googleapis.com/msgsndr/yMsNTtrF5fKA28L0OMsP/media/673054c070d7a33a160f2140.mp4" type="video/mp4">
        </video>
        <div class="progress-bar-container">
            <div class="progress-bar" id="progress-bar"></div>
        </div>
    `;

    // Initialize the video and progress bar
    const video = document.getElementById('background-video');
    const progressBar = document.getElementById('progress-bar');
    initializeVideoProgress(video, progressBar);

    let emptyContainer = document.querySelector('.Empty-container');
    if (emptyContainer) {
        emptyContainer.style.display = 'none';
    } else {
        emptyContainer = document.createElement('div');
        emptyContainer.className = 'Empty-container';
        chatContent.appendChild(emptyContainer);
    }

    // Create Play/Pause button
    const playPauseBtn = document.createElement('button');
    playPauseBtn.id = 'play-pause-btn';
    playPauseBtn.className = 'control-btn';
    playPauseBtn.setAttribute('aria-label', 'Play/Pause');

    const playPauseIcon = document.createElement('img');
    playPauseIcon.id = 'play-pause-icon';
    playPauseIcon.className = 'control-btn';
    playPauseIcon.setAttribute('aria-label', 'Play/Pause');
    playPauseIcon.src = 'https://storage.googleapis.com/msgsndr/aJYHtddTenz299BOqzfz/media/66eb060cf9de91b118c93a66.png';
    playPauseIcon.alt = 'Play/Pause Icon';

    playPauseBtn.appendChild(playPauseIcon);
    playPauseBtn.onclick = togglePlayPause;

    // Create Mute/Unmute button
    const muteUnmuteBtn = document.createElement('button');
    muteUnmuteBtn.id = 'mute-unmute-btn';
    muteUnmuteBtn.className = 'control-btn';
    muteUnmuteBtn.setAttribute('aria-label', 'Mute/Unmute');
    muteUnmuteBtn.onclick = toggleMute;

    const muteUnmuteIcon = document.createElement('img');
    muteUnmuteIcon.id = 'mute-unmute-icon';
    muteUnmuteIcon.src = 'https://storage.googleapis.com/msgsndr/aJYHtddTenz299BOqzfz/media/66eb0b2cc6a83988da4ff9fd.png';
    muteUnmuteBtn.appendChild(muteUnmuteIcon);

    // Create Refresh button
    const refreshBtn = document.createElement('button');
    refreshBtn.id = 'refresh-btn';
    refreshBtn.className = 'control-btn';
    refreshBtn.setAttribute('aria-label', 'Refresh');

    const refreshIcon = document.createElement('img');
    refreshIcon.id = 'refresh-icon';
    refreshIcon.src = 'https://storage.googleapis.com/msgsndr/aJYHtddTenz299BOqzfz/media/66eb04eaa256dd3e330dde51.png';
    refreshBtn.onclick = resetChatAndReload;
    refreshBtn.appendChild(refreshIcon);

    // Create Close button
    const closeBtn = document.createElement('button');
    closeBtn.id = 'close-btn';
    closeBtn.setAttribute('aria-label', 'Close chat widget');
    closeBtn.onclick = closeWidget;

    const closeIcon = document.createElement('img');
    closeIcon.id = 'close-icon';
    closeIcon.src = 'https://storage.googleapis.com/msgsndr/aJYHtddTenz299BOqzfz/media/66eb0456b8d5546df6dc3dac.png';
    closeBtn.appendChild(closeIcon);

    // Append buttons to chat header
    chatHeader.appendChild(playPauseBtn);
    chatHeader.appendChild(muteUnmuteBtn);
    chatHeader.appendChild(refreshBtn);
    chatHeader.appendChild(closeBtn);

    // Welcome message
    const welcomeMessage = document.createElement('div');
    welcomeMessage.className = 'message ot-message';
    welcomeMessage.textContent = `Hi 👋🏼 Welcome to Smith & Eulo Law Firm. How can we help you?`;

    // Chat options
    const chatOptions = document.createElement('div');
    chatOptions.className = 'chat-options';
    
    // Array of options to add manually
    const options = [
        'Assault & Battery', 'Violation of Probation/Parole/Community Control', 'Expungement of Your Record',
        'Domestic Violence', 'Possession of Drugs', 'Federal Criminal Case', 'DWI / DUI', 'Possession of a Weapon',
        'Burglary', 'Child Abuse', 'Sex Crimes', 'Manslaughter', 'Child Pornography', 'Robbery', 'Harassment',
        'Clearing Criminal Record', 'Prostitution', 'Drug Possession and Trafficking', 'Other Criminal Cases',
        'Car Accident', 'Divorce And Custody', 'Buying Products', 'Buying Services', 'Child Special Needs'
    ];

    options.forEach(option => {
        const button = document.createElement('button');
        button.className = 'option-btn bef';
        button.textContent = option;
        button.onclick = () => {
            selectOption(option, true); // Call selectOption when button is clicked
        };
        chatOptions.appendChild(button);
    });

    // Append welcome message and options to chat content
    chatContent.appendChild(welcomeMessage);
    chatContent.appendChild(chatOptions);
}

document.addEventListener('DOMContentLoaded', function () {
    // Call initializePayPauseButton or other initialization functions here
    initializePayPauseButton();
});

document.getElementById('chat-content').addEventListener('click', function(event) {
    if (event.target && event.target.id === 'pay-pause-btn') {
        togglePlayPause();
    }
});


document.addEventListener('DOMContentLoaded', function() {
    const chatButtons = document.querySelectorAll('.open-chat-button'); // Yeh 'open-chat-button' class hai

    chatButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            openChatWidget();
        });
    });
});





































































function askStateDrug() {
    questionStack.push({ question: "drugOffenseLocation", answer: null });
    const typingIndicator = showTypingIndicator();
    const messageTime = new Date();

    setTimeout(() => {
        removeTypingIndicator(typingIndicator);
        appendMessageWithImageAndTime("What state did the drug-related offense occur in?", 'bot-message', messageTime, true);

        const stateOptions = `
        <div id="state-options" class="chat-options">
            <select id="state-select" class="option-select">
                <option class="opt-cstm" value="" disabled selected>Select a state</option>
                <option class="opt-cstm" value="California">California</option>
                <option class="opt-cstm" value="Texas">Texas</option>
                <option class="opt-cstm" value="Florida">Florida</option>
                <!-- Add more states here if needed -->
            </select>
            <button class="submit-icon" onclick="handleStateDrugSelection()">
                <img src="https://storage.googleapis.com/msgsndr/aJYHtddTenz299BOqzfz/media/66fa91a7923b423d630ec12e.png" alt="submit">
            </button>
        </div>
        `;

        const inputGroup = document.createElement('div');
        inputGroup.innerHTML = stateOptions;
        document.getElementById('chat-content').appendChild(inputGroup);
        scrollToBottom();
    }, 1000);
}

function handleStateDrugSelection() {
    const state = document.getElementById('state-select').value;

    if (!state) {
        alert('Please select a state');
        return;
    }

    document.getElementById('state-options').remove();
    appendSubmittedMessage(state, 'user-message', true); // Add 'true' to show the undo button
    collectedData.stateDrugSelect = state;
    questionStack[questionStack.length - 1].answer = state;

    scrollToBottom();

    // Proceed to the next question (asking for the country)
    setTimeout(() => askCountryDrug(), 1000);
}

function askCountryDrug() {
    questionStack.push({ question: "drugOffenseCountry", answer: null });
    const messageTime = new Date();
    appendMessageWithImageAndTime("And what country?", 'bot-message', messageTime);

    const inputGroup = createInputGroup('Type here...', handleCountryDrug);
    document.getElementById('chat-content').appendChild(inputGroup);
    scrollToBottom();
}

function handleCountryDrug(country) {
    if (!country.trim()) {
        alert("Please enter a valid country.");
        return;
    }

    appendMessage(country, 'user-message', false);
    collectedData.countryDrug = country;
    removeInputGroup();
    setTimeout(() => askForSelfOrOtherDrug(), 1000);
}

function askForSelfOrOtherDrug() {
    questionStack.push({ question: "drugRelatedForSelfOrOther", answer: null });
    const messageTime = new Date();

    appendMessageWithImageAndTime(
        "Is this for you or someone else?", 
        'bot-message question-forSelfOrOtherDrug', 
        messageTime
    );

    const forSelfOrOtherOptions = `
        <div id="self-or-other-options" class="chat-options">
            <button class="option-btn" onclick="handleForSelfOrOtherDrug('Me')">Me</button>
            <button class="option-btn" onclick="handleForSelfOrOtherDrug('Someone Else')">Someone Else</button>
        </div>
    `;

    document.getElementById('chat-content').insertAdjacentHTML('beforeend', forSelfOrOtherOptions);
    scrollToBottom();
}

function handleForSelfOrOtherDrug(selection) {
    if (!selection) {
        alert("Please select an option.");
        return;
    }

    document.getElementById('self-or-other-options').remove();
    appendSubmittedMessage(selection, 'user-message', true);
    collectedData.forSelfOrOtherDrug = selection;
    questionStack[questionStack.length - 1].answer = selection;

    scrollToBottom();

    // Proceed to the next relevant question based on the user's selection
    setTimeout(() => {
        if (selection === "Me") {
            askPrescriptionForDrugs(); // Replace with the function to ask the next question for "Me"
        } else if (selection === "Someone Else") {
            askTheirName(); // Replace with the function to ask the next question for "Someone Else"
        }
    }, 1000);
}

function askPrescriptionForDrugs() {
    // Push the question onto the question stack
    questionStack.push({ question: "prescriptionForDrugs", answer: null });
    const messageTime = new Date(); // Capture the message time

    // Display the question
    appendMessageWithImageAndTime("Do you hold a prescription for any of the drugs listed?", 'bot-message', messageTime);

    // Create options for Yes and No
    const prescriptionOptions = `
        <div id="prescription-options" class="chat-options">
            <button class="option-btn" onclick="handlePrescriptionSelection('Yes, I have a prescription')">Yes, I have a prescription</button>
            <button class="option-btn" onclick="handlePrescriptionSelection('No')">No</button>
        </div>
    `;

    // Append the options to chat content
    const inputGroup = document.createElement('div');
    inputGroup.innerHTML = prescriptionOptions;
    document.getElementById('chat-content').appendChild(inputGroup);
    scrollToBottom(); // Ensure scroll is at the bottom after adding options
}

function handlePrescriptionSelection(selection) {
    if (!selection) {
        alert("Please select an option.");
        return;
    }

    // Remove the options after selection
    const optionsElement = document.getElementById('prescription-options');
    if (optionsElement) {
        optionsElement.remove();
    }

    // Append the user's choice to the chat and store it in collectedData
    appendSubmittedMessage(selection, 'user-message', true); // Show the undo button
    collectedData.prescriptionForDrugs = selection; // Store the selection
    questionStack[questionStack.length - 1].answer = selection; // Update question stack with the answer

    scrollToBottom();

    // Proceed to the next question based on selection
    if (selection === "Yes, I have a prescription") {
        setTimeout(() => askPrescriptionDetails(), 1000); // Replace with function to ask for prescription details
    } else {
        setTimeout(() => askNextQuestionInDrugFlow(), 1000); // Replace with the actual next function if no prescription
    }
}

function askPrescriptionForDrugs() {
    // Push the question onto the question stack
    questionStack.push({ question: "prescriptionForDrugs", answer: null });
    const messageTime = new Date(); // Capture the message time

    // Display the question
    appendMessageWithImageAndTime("Do you hold a prescription for any of the drugs listed?", 'bot-message', messageTime);

    // Create options for Yes and No
    const prescriptionOptions = `
        <div id="prescription-options" class="chat-options">
            <button class="option-btn" onclick="handlePrescriptionSelection('Yes, I have a prescription')">Yes, I have a prescription</button>
            <button class="option-btn" onclick="handlePrescriptionSelection('No')">No</button>
        </div>
    `;

    // Append the options to chat content
    const inputGroup = document.createElement('div');
    inputGroup.innerHTML = prescriptionOptions;
    document.getElementById('chat-content').appendChild(inputGroup);
    scrollToBottom(); // Ensure scroll is at the bottom after adding options
}

function handlePrescriptionSelection(selection) {
    if (!selection) {
        alert("Please select an option.");
        return;
    }

    // Remove the options after selection
    const optionsElement = document.getElementById('prescription-options');
    if (optionsElement) {
        optionsElement.remove();
    }

    // Append the user's choice to the chat and store it in collectedData
    appendSubmittedMessage(selection, 'user-message', true); // Show the undo button
    collectedData.prescriptionForDrugs = selection; // Store the selection
    questionStack[questionStack.length - 1].answer = selection; // Update question stack with the answer

    scrollToBottom();

    // Proceed to the next question based on selection
    if (selection === "Yes, I have a prescription") {
        setTimeout(() => askNextHearingDate(), 1000); // Replace with function to ask for prescription details
    } else {
        setTimeout(() => askNextHearingDate(), 1000); // Replace with the actual next function if no prescription
    }
}

function askTheirName() {
    // Push the question onto the question stack
    questionStack.push({ question: "theirName", answer: null });
    const messageTime = new Date(); // Capture the message time

    // Display the question
    appendMessageWithImageAndTime("What is their name?", 'bot-message', messageTime);

    // Create an input field for the user to type the name
    const inputGroup = createInputGroup('Type here...', handleTheirName);
    document.getElementById('chat-content').appendChild(inputGroup);
    scrollToBottom();
}

function handleTheirName(name) {
    if (!name.trim()) {
        alert("Please enter a valid name.");
        return;
    }

    // Append the user's input to the chat
    appendMessage(name, 'user-message', false); // Show the name input
    collectedData.theirName = name; // Store the name in collectedData
    questionStack[questionStack.length - 1].answer = name; // Update question stack with the answer
    removeInputGroup(); // Remove the input field

    scrollToBottom();

    // Proceed to the next question
    setTimeout(() => askCustodyStatus(), 1000); // Replace with the actual next function
}

function askCustodyStatus() {
    // Push the question onto the question stack
    questionStack.push({ question: "custodyStatus", answer: null });
    const messageTime = new Date(); // Capture the message time

    // Display the question
    appendMessageWithImageAndTime("Are they currently in law enforcement's custody?", 'bot-message', messageTime);

    // Create options for Yes and No
    const custodyOptions = `
        <div id="custody-options" class="chat-options">
            <button class="option-btn" onclick="handleCustodyStatusSelection('Yes')">Yes</button>
            <button class="option-btn" onclick="handleCustodyStatusSelection('No, they are out')">No, they are out</button>
        </div>
    `;

    // Append the options to chat content
    const inputGroup = document.createElement('div');
    inputGroup.innerHTML = custodyOptions;
    document.getElementById('chat-content').appendChild(inputGroup);
    scrollToBottom(); // Ensure scroll is at the bottom after adding options
}

function handleCustodyStatusSelection(selection) {
    if (!selection) {
        alert("Please select an option.");
        return;
    }

    // Remove the options after selection
    const optionsElement = document.getElementById('custody-options');
    if (optionsElement) {
        optionsElement.remove();
    }

    // Append the user's choice to the chat and store it in collectedData
    appendSubmittedMessage(selection, 'user-message', true); // Show the undo button
    collectedData.custodyStatus = selection; // Store the selection
    questionStack[questionStack.length - 1].answer = selection; // Update question stack with the answer

    scrollToBottom();

    // Proceed to the next question based on selection
    if (selection === "Yes") {
        setTimeout(() => askChargesKnowledge(), 1000); // Replace with function for in-custody follow-up question
    } else {
        setTimeout(() => askChargesKnowledge(), 1000); // Replace with function for out-of-custody follow-up question
    }
}

function askChargesKnowledge() {
    // Push the question onto the question stack
    questionStack.push({ question: "chargesKnowledge", answer: null });
    const messageTime = new Date(); // Capture the message time

    // Display the question
    appendMessageWithImageAndTime("Do you know what they have been charged with?", 'bot-message', messageTime);

    // Create options for Yes and No
    const chargesOptions = `
        <div id="charges-options" class="chat-options">
            <button class="option-btn" onclick="handleChargesKnowledgeSelection('Yes')">Yes</button>
            <button class="option-btn" onclick="handleChargesKnowledgeSelection('No')">No</button>
        </div>
    `;

    // Append the options to chat content
    const inputGroup = document.createElement('div');
    inputGroup.innerHTML = chargesOptions;
    document.getElementById('chat-content').appendChild(inputGroup);
    scrollToBottom(); // Ensure scroll is at the bottom after adding options
}

function handleChargesKnowledgeSelection(selection) {
    if (!selection) {
        alert("Please select an option.");
        return;
    }

    // Remove the options after selection
    const optionsElement = document.getElementById('charges-options');
    if (optionsElement) {
        optionsElement.remove();
    }

    // Append the user's choice to the chat and store it in collectedData
    appendSubmittedMessage(selection, 'user-message', true); // Show the undo button
    collectedData.chargesKnowledge = selection; // Store the selection
    questionStack[questionStack.length - 1].answer = selection; // Update question stack with the answer

    scrollToBottom();

    // Proceed to the next question based on selection
    if (selection === "Yes") {
        setTimeout(() => askCharges(), 1000); // Replace with function to ask for charge details
    } else {
        setTimeout(() => askNextHearingDate(), 1000); // Replace with the actual next function if answer is No
    }
}

function askCharges() {
    // Push the question onto the question stack
    questionStack.push({ question: "charges", answer: null });
    const messageTime = new Date(); // Capture the message time

    // Display the question
    appendMessageWithImageAndTime("What are their charges?", 'bot-message', messageTime);

    // Create an input field for entering charges
    const chargesInput = `
        <div id="charges-input" class="chat-options">
            <input type="text" id="charges-text" placeholder="Type here..." class="option-input">
            <button class="submit-icon" onclick="handleCharges()">
                <img src="https://storage.googleapis.com/msgsndr/aJYHtddTenz299BOqzfz/media/66fa91a7923b423d630ec12e.png" alt="submit">
            </button>
        </div>
    `;

    // Append the input field to chat content
    const inputGroup = document.createElement('div');
    inputGroup.innerHTML = chargesInput;
    document.getElementById('chat-content').appendChild(inputGroup);
    scrollToBottom(); // Ensure scroll is at the bottom after adding options
}

function handleCharges() {
    const charges = document.getElementById('charges-text').value.trim();

    if (!charges) {
        alert("Please enter the charges.");
        return;
    }

    // Remove the input field after submitting
    document.getElementById('charges-input').remove();

    // Append the user's input to the chat and store it in collectedData
    appendSubmittedMessage(charges, 'user-message', true); // Show the undo button
    collectedData.charges = charges; // Store the charges
    questionStack[questionStack.length - 1].answer = charges; // Update question stack with the answer

    scrollToBottom();

    // Proceed to the next question
    setTimeout(() => askNextHearingDate(), 1000); // Replace with the actual next function in your flow
}

function askNextHearingDate() {
    // Push the question onto the question stack
    questionStack.push({ question: "nextHearingDate", answer: null });
    const messageTime = new Date(); // Capture the message time

    // Display the question
    appendMessageWithImageAndTime("When is your next hearing?", 'bot-message', messageTime);

    // Create date picker for next hearing
    const hearingDateOptions = `
        <div id="hearing-date-options" class="chat-options">
            <input type="date" id="hearing-date-input" class="option-select">
            <button class="submit-icon" onclick="handleHearingDateSelection()">
                <img src="https://storage.googleapis.com/msgsndr/aJYHtddTenz299BOqzfz/media/66fa91a7923b423d630ec12e.png" alt="submit">
            </button>
            <button class="option-btn" onclick="skipHearingDate()">Skip</button>
        </div>
    `;

    // Append the options to chat content
    const inputGroup = document.createElement('div');
    inputGroup.innerHTML = hearingDateOptions;
    document.getElementById('chat-content').appendChild(inputGroup);
    scrollToBottom(); // Ensure scroll is at the bottom after adding options
}

function handleHearingDateSelection() {
    const selectedDate = document.getElementById('hearing-date-input').value;

    if (!selectedDate) {
        alert("Please select a date or click 'Skip' if you don't want to provide it.");
        return;
    }

    // Remove the date options after selection
    document.getElementById('hearing-date-options').remove();

    // Append the user's choice to the chat and store it in collectedData
    appendSubmittedMessage(selectedDate, 'user-message', true); // Show the undo button
    collectedData.nextHearingDate = selectedDate; // Store the selected date
    questionStack[questionStack.length - 1].answer = selectedDate; // Update question stack with the answer

    scrollToBottom();

    // Proceed to the next question
    setTimeout(() => askOtherDetails(), 1000); // Replace with the actual next function
}

function skipHearingDate() {
    // Remove the date options after skipping
    document.getElementById('hearing-date-options').remove();

    // Append 'Skipped' to the chat and store it in collectedData
    appendSubmittedMessage("Skipped", 'user-message', true); // Show the undo button
    collectedData.nextHearingDate = "Skipped"; // Store 'Skipped' as the answer
    questionStack[questionStack.length - 1].answer = "Skipped"; // Update question stack with the answer

    scrollToBottom();

    // Proceed to the next question
    setTimeout(() => askNextQuestionInFlow(), 1000); // Replace with the actual next function
}

// Function to ask for the state where the criminal incident occurred
function askStateCriminal() {
    questionStack.push({ question: "stateCriminal", answer: null });
    const messageTime = new Date(); // Capture the message time

    // Append question message
    appendMessageWithImageAndTime("In what state did the offense occur?", 'bot-message question-stateCriminal', messageTime);

    // Create dropdown for state options
    const stateOptions = `
        <div id="state-options" class="chat-options question-stateCriminal">
            <select id="state-select" class="option-select">
                <option class="opt-cstm" value="" disabled selected>Select a state</option>
                <option class="opt-cstm" value="California">California</option>
                <option class="opt-cstm" value="Texas">Texas</option>
                <option class="opt-cstm" value="Florida">Florida</option>
                <!-- Add more states here if needed -->
            </select>
            <button class="submit-icon" onclick="handleStateCriminalSelection()">
                <img src="https://storage.googleapis.com/msgsndr/aJYHtddTenz299BOqzfz/media/66fa91a7923b423d630ec12e.png" alt="img">
            </button>
        </div>
    `;

    document.getElementById('chat-content').insertAdjacentHTML('beforeend', stateOptions);
    scrollToBottom();
}

// Function to handle state selection for criminal incident
function handleStateCriminalSelection() {
    const state = document.getElementById('state-select').value;
    
    if (!state) {
        alert('Please select a state');
        return;
    }

    // Remove the state options after selection
    document.getElementById('state-options').remove();

    // Append the user's choice to the chat
    appendSubmittedMessage(state, 'user-message', true); // Add 'true' to show the undo button
    collectedData.stateCriminal = state; // Collect the state selection
    questionStack[questionStack.length - 1].answer = state; // Update the last question stack with answer

    scrollToBottom();

    // Proceed to the next question
    setTimeout(() => askCountryCriminal(), 1000);
}

// Function to ask for the country where the criminal incident occurred
function askCountryCriminal() {
    questionStack.push({ question: "countryCriminal", answer: null });
    const messageTime = new Date(); // Capture the message time

    // Append question message
    appendMessageWithImageAndTime("And what country?", 'bot-message question-countryCriminal', messageTime);

    const inputGroup = createInputGroup('Type here...', handleCountryCriminal);
    document.getElementById('chat-content').appendChild(inputGroup);
    scrollToBottom();
}

// Function to handle country input for criminal incident
function handleCountryCriminal(countryName) {
    if (!countryName.trim()) {
        alert("Please enter a valid country name.");
        return;
    }

    appendMessage(countryName, 'user-message', false); // Show the country input
    collectedData.countryCriminal = countryName; // Store country name
    removeInputGroup(); // Remove the input field

    // Move to the next question
    setTimeout(() => askForCaseNumber(), 1000); // Replace `askForSelfOrOther` with the actual next function
}

// Function to ask if the user has a case number
function askForCaseNumber() {
    questionStack.push({ question: "caseNumber", answer: null });
    const messageTime = new Date(); // Capture the message time

    // Append question message
    appendMessageWithImageAndTime("Do you have a case number?", 'bot-message question-caseNumber', messageTime);

    // Create Yes/No buttons
    const caseNumberOptions = `
        <div id="case-number-options" class="chat-options question-caseNumber">
            <button class="option-btn" onclick="handleCaseNumberSelection('Yes')">Yes</button>
            <button class="option-btn" onclick="handleCaseNumberSelection('No')">No</button>
        </div>
    `;

    document.getElementById('chat-content').insertAdjacentHTML('beforeend', caseNumberOptions);
    scrollToBottom();
}

// Function to handle case number selection
function handleCaseNumberSelection(selection) {
    if (!selection) {
        alert('Please select an option.');
        return;
    }

    // Remove the options after selection
    const optionsElement = document.getElementById('case-number-options');
    if (optionsElement) {
        optionsElement.remove();
    }

    // Append the user's choice to the chat and store it in collectedData
    appendSubmittedMessage(selection, 'user-message question-caseNumber', true);
    collectedData.caseNumber = selection;
    questionStack[questionStack.length - 1].answer = selection;

    scrollToBottom();

    // Proceed to the next question based on selection
    setTimeout(() => {
        if (selection === 'Yes') {
            askCaseNumber(); // Replace `askState` with the actual function if case number is confirmed
        } else {
            askOtherDetails(); // Replace `askForMoreInfo` with the actual function if case number is not provided
        }
    }, 1000);
}

function askCaseNumber() {
    questionStack.push({ question: "caseNumber", answer: null });
    const messageTime = new Date(); // Capture the message time

    // Append question message
    appendMessageWithImageAndTime("Please type the case number below.", 'bot-message question-caseNumber', messageTime);

    const inputGroup = createInputGroup('Type here...', handleCaseNumber);
    document.getElementById('chat-content').appendChild(inputGroup);
    scrollToBottom();
}

function handleCaseNumber(caseNumber) {
    if (!caseNumber.trim()) {
        alert("Please enter a valid case number.");
        return;
    }

    appendMessage(caseNumber, 'user-message', false); // Show the case number input
    collectedData.caseNumber = caseNumber; // Store the case number
    removeInputGroup(); // Remove the input field

    // Proceed to the next question or finish the process
    setTimeout(() => askOtherDetails(), 1000); // Replace askNextQuestion with the actual next function
}

// Function to ask for the state where the accident happened
function askAccidentState() {
    questionStack.push({ question: "accidentState", answer: null });
    const messageTime = new Date(); // Capture the message time

    // Append question message
    appendMessageWithImageAndTime(
        "In what state did the accident happen?", 
        'bot-message question-accidentState', 
        messageTime
    );

    // Create a dropdown for selecting a U.S. state
    const stateOptions = `
        <div id="state-options" class="chat-options question-accidentState">
            <select id="state-select" class="option-select">
                <option value="" disabled selected>Select a state</option>
                <option value="Alabama">Alabama</option>
                <option value="Alaska">Alaska</option>
                <option value="Arizona">Arizona</option>
                <option value="Arkansas">Arkansas</option>
                <option value="California">California</option>
                <option value="Colorado">Colorado</option>
                <option value="Connecticut">Connecticut</option>
                <option value="Delaware">Delaware</option>
                <option value="Florida">Florida</option>
                <option value="Georgia">Georgia</option>
                <option value="Hawaii">Hawaii</option>
                <option value="Idaho">Idaho</option>
                <option value="Illinois">Illinois</option>
                <option value="Indiana">Indiana</option>
                <option value="Iowa">Iowa</option>
                <option value="Kansas">Kansas</option>
                <option value="Kentucky">Kentucky</option>
                <option value="Louisiana">Louisiana</option>
                <option value="Maine">Maine</option>
                <option value="Maryland">Maryland</option>
                <option value="Massachusetts">Massachusetts</option>
                <option value="Michigan">Michigan</option>
                <option value="Minnesota">Minnesota</option>
                <option value="Mississippi">Mississippi</option>
                <option value="Missouri">Missouri</option>
                <option value="Montana">Montana</option>
                <option value="Nebraska">Nebraska</option>
                <option value="Nevada">Nevada</option>
                <option value="New Hampshire">New Hampshire</option>
                <option value="New Jersey">New Jersey</option>
                <option value="New Mexico">New Mexico</option>
                <option value="New York">New York</option>
                <option value="North Carolina">North Carolina</option>
                <option value="North Dakota">North Dakota</option>
                <option value="Ohio">Ohio</option>
                <option value="Oklahoma">Oklahoma</option>
                <option value="Oregon">Oregon</option>
                <option value="Pennsylvania">Pennsylvania</option>
                <option value="Rhode Island">Rhode Island</option>
                <option value="South Carolina">South Carolina</option>
                <option value="South Dakota">South Dakota</option>
                <option value="Tennessee">Tennessee</option>
                <option value="Texas">Texas</option>
                <option value="Utah">Utah</option>
                <option value="Vermont">Vermont</option>
                <option value="Virginia">Virginia</option>
                <option value="Washington">Washington</option>
                <option value="West Virginia">West Virginia</option>
                <option value="Wisconsin">Wisconsin</option>
                <option value="Wyoming">Wyoming</option>
            </select>
            <button class="submit-icon" onclick="handleStateSelection()">
                <img src="https://storage.googleapis.com/msgsndr/aJYHtddTenz299BOqzfz/media/66fa91a7923b423d630ec12e.png" alt="submit">
            </button>
        </div>
    `;

    // Append the dropdown to the chat content
    document.getElementById('chat-content').insertAdjacentHTML('beforeend', stateOptions);
    scrollToBottom();
}

// Function to handle state selection
function handleStateSelection() {
    const state = document.getElementById('state-select').value;

    if (!state) {
        alert('Please select a state');
        return;
    }

    // Remove the dropdown after selection
    const stateOptions = document.getElementById('state-options');
    if (stateOptions) {
        stateOptions.remove();
    }

    // Append the user's choice to the chat and store it in collectedData
    appendSubmittedMessage(state, 'user-message question-accidentState', true); // Add 'true' to show the Undo button
    collectedData.accidentState = state;
    questionStack[questionStack.length - 1].answer = state;

    scrollToBottom();

    // Proceed to the next question or action
    setTimeout(() => askAccidentCity(), 1000); // Replace askNextQuestion() with the actual next question function
}

// Function to ask for the city where the accident happened
function askAccidentCity() {
    questionStack.push({ question: "accidentCity", answer: null });
    const messageTime = new Date(); // Capture the message time

    // Append question message
    appendMessageWithImageAndTime(
        "And the city?", 
        'bot-message question-accidentCity', 
        messageTime
    );

    // Create an input field for the user to type the city
    const cityInputField = `
        <div id="city-input-container" class="chat-input-container question-accidentCity">
            <input type="text" id="city-input" placeholder="Type here..." class="chat-input input-text-field">
            <button class="submit-icon" onclick="handleCitySelection()">
                <img src="https://storage.googleapis.com/msgsndr/aJYHtddTenz299BOqzfz/media/66fa91a7923b423d630ec12e.png" alt="submit">
            </button>
        </div>
    `;

    // Append the input field to the chat content
    document.getElementById('chat-content').insertAdjacentHTML('beforeend', cityInputField);
    scrollToBottom();
}

// Function to handle city selection
function handleCitySelection() {
    const city = document.getElementById('city-input').value.trim();

    if (!city) {
        alert('Please enter a city');
        return;
    }

    // Remove the input container after submission
    const cityInputContainer = document.getElementById('city-input-container');
    if (cityInputContainer) {
        cityInputContainer.remove();
    }

    // Append the user's input to the chat and store it in collectedData
    appendSubmittedMessage(city, 'user-message question-accidentCity', true); // Add 'true' to show the Undo button
    collectedData.accidentCity = city;
    questionStack[questionStack.length - 1].answer = city;

    scrollToBottom();

    // Proceed to the next question or action
    setTimeout(() => askAccidentDate(), 1000); // Replace askNextQuestion() with the actual next question function
}

// Function to ask when the accident occurred
function askAccidentDate() {
    questionStack.push({ question: "accidentDate", answer: null });
    const messageTime = new Date(); // Capture the message time

    // Append question message
    appendMessageWithImageAndTime(
        "When did the accident occur?", 
        'bot-message question-accidentDate', 
        messageTime
    );

    // Create month and year dropdowns with Skip and Confirm buttons
    const accidentDateOptions = `
        <div id="accident-date-options" class="chat-options question-accidentDate">
            <div class="date-selectors">
                <select id="accident-month-select" class="option-select">
                    <option value="" disabled selected>Month</option>
                    <option value="January">January</option>
                    <option value="February">February</option>
                    <option value="March">March</option>
                    <option value="April">April</option>
                    <option value="May">May</option>
                    <option value="June">June</option>
                    <option value="July">July</option>
                    <option value="August">August</option>
                    <option value="September">September</option>
                    <option value="October">October</option>
                    <option value="November">November</option>
                    <option value="December">December</option>
                </select>
                <select id="accident-year-select" class="option-select">
                    <option value="" disabled selected>Year</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                </select>
            </div>
            <div class="action-buttons">
                <button class="option-btn" onclick="skipAccidentDate()">Skip</button>
                <button class="submit-icon" onclick="handleAccidentDateSelection()">
                    <img src="https://storage.googleapis.com/msgsndr/aJYHtddTenz299BOqzfz/media/66fa91a7923b423d630ec12e.png" alt="submit">
                </button>
            </div>
        </div>
    `;

    // Append the options to the chat content
    document.getElementById('chat-content').insertAdjacentHTML('beforeend', accidentDateOptions);
    scrollToBottom();
}

// Function to handle accident date selection
function handleAccidentDateSelection() {
    const month = document.getElementById('accident-month-select').value;
    const year = document.getElementById('accident-year-select').value;

    if (!month || !year) {
        alert('Please select both month and year');
        return;
    }

    // Remove the date options after selection
    document.getElementById('accident-date-options').remove();

    // Format the selected date
    const accidentDate = `${month} ${year}`;

    // Append the user's choice to the chat and store it in collectedData
    appendSubmittedMessage(accidentDate, 'user-message question-accidentDate', true); // Add 'true' to show the Undo button
    collectedData.accidentDate = accidentDate;
    questionStack[questionStack.length - 1].answer = accidentDate;

    scrollToBottom();

    // Proceed to the next question
    setTimeout(() => askInjuryStatus(), 1000); // Replace askNextQuestion() with the actual next question function
}

// Function to handle skipping the accident date
function skipAccidentDate() {
    // Remove the date options after skipping
    document.getElementById('accident-date-options').remove();

    // Append "Skipped" message to the chat
    appendSubmittedMessage("Skipped", 'user-message question-accidentDate', true); // Add 'true' to show the Undo button
    collectedData.accidentDate = "Skipped";
    questionStack[questionStack.length - 1].answer = "Skipped";

    scrollToBottom();

    // Proceed to the next question
    setTimeout(() => askNextQuestion(), 1000); // Replace askNextQuestion() with the actual next question function
}

// Function to ask about injuries from the accident
function askInjuryStatus() {
    questionStack.push({ question: "injuryStatus", answer: null });
    const messageTime = new Date(); // Capture the message time

    // Append question message
    appendMessageWithImageAndTime(
        "Did you suffer any injuries or are you experiencing pain from the accident?", 
        'bot-message question-injuryStatus', 
        messageTime
    );

    // Create options for injury status
    const injuryStatusOptions = `
        <div id="injury-status-options" class="chat-options question-injuryStatus">
            <button class="option-btn" onclick="handleInjuryStatusSelection('Yes')">Yes</button>
            <button class="option-btn" onclick="handleInjuryStatusSelection('Someone else was injured')">Someone else was injured</button>
        </div>
    `;

    // Append the options to the chat content
    document.getElementById('chat-content').insertAdjacentHTML('beforeend', injuryStatusOptions);
    scrollToBottom();
}

// Function to handle injury status selection
function handleInjuryStatusSelection(selection) {
    if (!selection) {
        alert('Please select an option.');
        return;
    }

    // Remove the options after selection
    const optionsElement = document.getElementById('injury-status-options');
    if (optionsElement) {
        optionsElement.remove();
    }

    // Append the user's choice to the chat and store it in collectedData
    appendSubmittedMessage(selection, 'user-message question-injuryStatus', true); // Add 'true' to show the Undo button
    collectedData.injuryStatus = selection;
    questionStack[questionStack.length - 1].answer = selection;

    scrollToBottom();

    // Proceed to the next question based on the selection
    if (selection === 'Yes') {
        setTimeout(() => askInjuryDetails(), 1000); // Replace with actual function if "Yes"
    } else {
        setTimeout(() => askOtherPersonInjury(), 1000); // Replace with actual function if "Someone else was injured"
    }
}

// Function to ask about specific injuries or areas of pain
function askInjuryDetails() {
    questionStack.push({ question: "injuryDetails", answer: null });
    const messageTime = new Date(); // Capture the message time

    // Append question message
    appendMessageWithImageAndTime(
        "What are your injuries or where are you experiencing pain? Scroll down & select all that apply.", 
        'bot-message question-injuryDetails', 
        messageTime
    );

    // Create multi-select dropdown for injury details
    const injuryDetailsOptions = `
       <!-- Injury/Pain Multi-Select Dropdown -->
<div id="injury-options" class="chat-options question-injury">
    <label for="injury-select">What are your injuries or where are you experiencing pain? Scroll down & select all that apply.</label>
    <select id="injury-select" class="option-select" multiple>
        <option value="Head & brain">Head & brain</option>
        <option value="Back & neck">Back & neck</option>
        <option value="Chest">Chest</option>
        <option value="Arm & leg">Arm & Leg</option>
        <option value="Broken bones">Broken bones</option>
        <option value="Soft tissue (muscle, tendons, etc.)">Soft tissue (muscle, tendons, etc.)</option>
        <option value="Scrapes & cuts">Scrapes & cuts</option>
        <option value="Other">Other</option>
    </select>
    <button class="submit-icon" onclick="handleInjurySelection()">
        <img src="https://storage.googleapis.com/msgsndr/aJYHtddTenz299BOqzfz/media/66fa91a7923b423d630ec12e.png" alt="submit">
    </button>
</div>

    `;

    // Append the dropdown to the chat content
    document.getElementById('chat-content').insertAdjacentHTML('beforeend', injuryDetailsOptions);
    scrollToBottom();
}

// Function to handle injury selection
function handleInjurySelection() {
    const injurySelect = document.getElementById('injury-select');
    const selectedInjuries = Array.from(injurySelect.selectedOptions).map(option => option.value);

    if (selectedInjuries.length === 0) {
        alert('Please select at least one injury or pain area.');
        return;
    }

    // Remove the options after selection
    document.getElementById('injury-options').remove();

    // Display selected injuries in the chat and store them in collectedData
    const injuryList = selectedInjuries.join(', ');
    appendSubmittedMessage(injuryList, 'user-message question-injury', true);
    collectedData.injuries = selectedInjuries;
    questionStack[questionStack.length - 1].answer = selectedInjuries;

    scrollToBottom();

    // Proceed to the next question or function (replace askNextQuestion with the actual function)
    setTimeout(() => askReceivedTreatment(), 1000);
}

function askReceivedTreatment() {
    questionStack.push({ question: "receivedTreatment", answer: null });
    const messageTime = new Date(); // Capture the message time

    // Append question message
    appendMessageWithImageAndTime(
        "Did you receive medical treatment for your injuries?", 
        'bot-message question-receivedTreatment', 
        messageTime
    );

    // Create options for the response
    const receivedTreatmentOptions = `
        <div id="received-treatment-options" class="chat-options question-receivedTreatment">
            <button class="option-btn" onclick="handleReceivedTreatmentSelection('Yes')">Yes</button>
            <button class="option-btn" onclick="handleReceivedTreatmentSelection('No')">No</button>
        </div>
    `;

    // Append the options to the chat content
    document.getElementById('chat-content').insertAdjacentHTML('beforeend', receivedTreatmentOptions);
    scrollToBottom();
}

function handleReceivedTreatmentSelection(selection) {
    if (!selection) {
        alert('Please select an option.');
        return;
    }

    // Remove the options after selection
    const optionsElement = document.getElementById('received-treatment-options');
    if (optionsElement) {
        optionsElement.remove();
    }

    // Append the user's choice to the chat and store it in collectedData
    appendSubmittedMessage(selection, 'user-message question-receivedTreatment', true); // Add 'true' to show the Undo button
    collectedData.receivedTreatment = selection;
    questionStack[questionStack.length - 1].answer = selection;

    scrollToBottom();

    // Proceed to the next question based on the user's selection
    if (selection === 'Yes') {
        setTimeout(() => askMedicalCareReceivedSelf(), 1000); // Replace with the actual function for the next question if "Yes"
    } else {
        setTimeout(() => askAdditionalInformation(), 1000); // Replace with the actual function for the next question if "No"
    }
}


// Function to ask about the injuries or pain for another person
function askOtherPersonInjury() {
    questionStack.push({ question: "otherPersonInjury", answer: null });
    const messageTime = new Date(); // Capture the message time

    // Append the question message to the chat
    appendMessageWithImageAndTime(
        "What are their injuries or where are they experiencing pain? Scroll down & select all that apply.",
        'bot-message question-otherPersonInjury',
        messageTime
    );

    // Create multi-select dropdown options
    const otherPersonInjuryOptions = `
        <div id="other-person-injury-options" class="chat-options question-otherPersonInjury">
            <label for="other-person-injury-select">Select all that apply:</label>
            <select id="other-person-injury-select" class="option-select" multiple>
                <option value="Head & brain">Head & brain</option>
                <option value="Back & neck">Back & neck</option>
                <option value="Chest">Chest</option>
                <option value="Arm & leg">Arm & leg</option>
                <option value="Broken bones">Broken bones</option>
                <option value="Soft tissue (muscle, tendons, etc.)">Soft tissue (muscle, tendons, etc.)</option>
                <option value="Scrapes & cuts">Scrapes & cuts</option>
                <option value="Other">Other</option>
            </select>
            <button class="submit-icon" onclick="handleOtherPersonInjurySelection()">
                <img src="https://storage.googleapis.com/msgsndr/aJYHtddTenz299BOqzfz/media/66fa91a7923b423d630ec12e.png" alt="submit">
            </button>
        </div>
    `;

    // Append the dropdown to the chat content
    document.getElementById('chat-content').insertAdjacentHTML('beforeend', otherPersonInjuryOptions);
    scrollToBottom();
}

// Function to handle the selection of injuries for another person
function handleOtherPersonInjurySelection() {
    const selectElement = document.getElementById('other-person-injury-select');
    const selectedOptions = Array.from(selectElement.selectedOptions).map(option => option.value);

    // Check if at least one option is selected
    if (selectedOptions.length === 0) {
        alert('Please select at least one option or skip if not applicable.');
        return;
    }

    // Remove the options after selection
    const optionsElement = document.getElementById('other-person-injury-options');
    if (optionsElement) {
        optionsElement.remove();
    }

    // Append the user's choice to the chat and store it in collectedData
    appendSubmittedMessage(selectedOptions.join(', '), 'user-message question-otherPersonInjury', true); // Add 'true' to show the Undo button
    collectedData.otherPersonInjury = selectedOptions;
    questionStack[questionStack.length - 1].answer = selectedOptions;

    scrollToBottom();

    // Proceed to the next question or wrap up as needed
    setTimeout(() => askOtherPersonMedicalTreatment(), 1000); // Replace `askNextQuestion` with the actual function for the next step
}

// Function to ask if the other person received medical treatment for their injuries
function askOtherPersonMedicalTreatment() {
    questionStack.push({ question: "otherPersonMedicalTreatment", answer: null });
    const messageTime = new Date(); // Capture the message time

    // Append question message to the chat
    appendMessageWithImageAndTime(
        "Did they receive medical treatment for their injuries?",
        'bot-message question-otherPersonMedicalTreatment',
        messageTime
    );

    // Create Yes/No options
    const treatmentOptions = `
        <div id="other-person-treatment-options" class="chat-options question-otherPersonMedicalTreatment">
            <button class="option-btn" onclick="handleOtherPersonMedicalTreatmentSelection('Yes')">Yes</button>
            <button class="option-btn" onclick="handleOtherPersonMedicalTreatmentSelection('No')">No</button>
        </div>
    `;

    // Append the options to chat content
    document.getElementById('chat-content').insertAdjacentHTML('beforeend', treatmentOptions);
    scrollToBottom();
}

// Function to handle the selection of medical treatment for the other person
function handleOtherPersonMedicalTreatmentSelection(selection) {
    if (!selection) {
        alert('Please select an option.');
        return;
    }

    // Remove the options after selection
    const optionsElement = document.getElementById('other-person-treatment-options');
    if (optionsElement) {
        optionsElement.remove();
    }

    // Append the user's choice to the chat and store it in collectedData
    appendSubmittedMessage(selection, 'user-message question-otherPersonMedicalTreatment', true); // Add 'true' to show the Undo button
    collectedData.otherPersonMedicalTreatment = selection;
    questionStack[questionStack.length - 1].answer = selection;

    scrollToBottom();

    // Proceed to the next question based on the selection
    if (selection === 'Yes') {
        setTimeout(() => askMedicalCareReceived(), 1000); // Replace with the next question if they received treatment
    } else {
        setTimeout(() => askAdditionalInformation(), 1000); // Replace with the next question if they didn't receive treatment
    }
}

// Function to ask about the type of medical care received
function askMedicalCareReceived() {
    questionStack.push({ question: "medicalCareReceived", answer: null });
    const messageTime = new Date(); // Capture the message time

    // Append question message
    appendMessageWithImageAndTime(
        "What kind of medical care have they received so far? Scroll down & select all that apply.",
        'bot-message question-medicalCareReceived',
        messageTime
    );

    // Create multi-select dropdown with medical care options
    const medicalCareOptions = `
        <div id="medical-care-options" class="chat-options question-medicalCareReceived">
            <select id="medical-care-select" class="option-select" multiple>
                <option value="Ambulance (at the scene)">Ambulance (at the scene)</option>
                <option value="Emergency room">Emergency room</option>
                <option value="Surgery">Surgery</option>
                <option value="Urgent care clinic">Urgent care clinic</option>
                <option value="Specialist doctor">Specialist doctor</option>
                <option value="Regular doctor">Regular doctor</option>
                <option value="Medical tests (X-Rays, MRI, etc)">Medical tests (X-Rays, MRI, etc)</option>
                <option value="Other">Other</option>
            </select>
            <div class="action-buttons">
                <button class="option-btn" onclick="skipMedicalCareSelection()">Skip</button>
                <button class="submit-icon" onclick="handleMedicalCareSelection()">
                    <img src="https://storage.googleapis.com/msgsndr/aJYHtddTenz299BOqzfz/media/66fa91a7923b423d630ec12e.png" alt="submit">
                </button>
            </div>
        </div>
    `;

    document.getElementById('chat-content').insertAdjacentHTML('beforeend', medicalCareOptions);
    scrollToBottom();
}

// Function to handle medical care selection
function handleMedicalCareSelection() {
    const selectedOptions = Array.from(document.getElementById('medical-care-select').selectedOptions).map(option => option.value);

    if (selectedOptions.length === 0) {
        alert('Please select at least one option or skip.');
        return;
    }

    // Remove the options after selection
    document.getElementById('medical-care-options').remove();

    // Format the selected options
    const selectedMedicalCare = selectedOptions.join(", ");

    // Append the user's choice to the chat and store it in collectedData
    appendSubmittedMessage(selectedMedicalCare, 'user-message question-medicalCareReceived', true); // Add 'true' to show the Undo button
    collectedData.medicalCareReceived = selectedMedicalCare;
    questionStack[questionStack.length - 1].answer = selectedMedicalCare;

    scrollToBottom();

    // Proceed to the next question (adjust as needed for the next step)
    setTimeout(() => askAdditionalInformation(), 1000); // Replace with the actual function for the next question
}

// Function to handle skip option for medical care selection
function skipMedicalCareSelection() {
    // Remove the options after skipping
    document.getElementById('medical-care-options').remove();

    // Append "Skipped" message to the chat
    appendSubmittedMessage("Skipped", 'user-message question-medicalCareReceived', true); // Add 'true' to show the Undo button
    collectedData.medicalCareReceived = "Skipped";
    questionStack[questionStack.length - 1].answer = "Skipped";

    scrollToBottom();

    // Proceed to the next question (adjust as needed for the next step)
    setTimeout(() => askNextQuestion(), 1000); // Replace with the actual function for the next question
}

// Function to ask about the type of medical care received
function askMedicalCareReceivedSelf() {
    questionStack.push({ question: "medicalCareReceivedSelf", answer: null });
    const messageTime = new Date(); // Capture the message time

    // Append question message
    appendMessageWithImageAndTime(
        "What kind of medical care have you received so far? Scroll down & select all that apply.",
        'bot-message question-medicalCareReceivedSelf',
        messageTime
    );

    // Create multi-select dropdown with medical care options
    const medicalCareOptions = `
        <div id="medical-care-options-self" class="chat-options question-medicalCareReceivedSelf">
            <select id="medical-care-select-self" class="option-select" multiple>
                <option value="Ambulance (at the scene)">Ambulance (at the scene)</option>
                <option value="Emergency room">Emergency room</option>
                <option value="Surgery">Surgery</option>
                <option value="Urgent care clinic">Urgent care clinic</option>
                <option value="Specialist doctor">Specialist doctor</option>
                <option value="Regular doctor">Regular doctor</option>
                <option value="Medical tests (X-Rays, MRI, etc)">Medical tests (X-Rays, MRI, etc)</option>
                <option value="Other">Other</option>
            </select>
            <div class="action-buttons">
                <button class="option-btn" onclick="skipMedicalCareSelectionSelf()">Skip</button>
                <button class="submit-icon" onclick="handleMedicalCareSelectionSelf()">
                    <img src="https://storage.googleapis.com/msgsndr/aJYHtddTenz299BOqzfz/media/66fa91a7923b423d630ec12e.png" alt="submit">
                </button>
            </div>
        </div>
    `;

    document.getElementById('chat-content').insertAdjacentHTML('beforeend', medicalCareOptions);
    scrollToBottom();
}

// Function to handle medical care selection for self
function handleMedicalCareSelectionSelf() {
    const selectedOptions = Array.from(document.getElementById('medical-care-select-self').selectedOptions).map(option => option.value);

    if (selectedOptions.length === 0) {
        alert('Please select at least one option or skip.');
        return;
    }

    // Remove the options after selection
    document.getElementById('medical-care-options-self').remove();

    // Format the selected options
    const selectedMedicalCare = selectedOptions.join(", ");

    // Append the user's choice to the chat and store it in collectedData
    appendSubmittedMessage(selectedMedicalCare, 'user-message question-medicalCareReceivedSelf', true); // Add 'true' to show the Undo button
    collectedData.medicalCareReceivedSelf = selectedMedicalCare;
    questionStack[questionStack.length - 1].answer = selectedMedicalCare;

    scrollToBottom();

    // Proceed to the next question (adjust as needed for the next step)
    setTimeout(() => askAdditionalInformation(), 1000); // Replace with the actual function for the next question
}

// Function to handle skip option for medical care selection for self
function skipMedicalCareSelectionSelf() {
    // Remove the options after skipping
    document.getElementById('medical-care-options-self').remove();

    // Append "Skipped" message to the chat
    appendSubmittedMessage("Skipped", 'user-message question-medicalCareReceivedSelf', true); // Add 'true' to show the Undo button
    collectedData.medicalCareReceivedSelf = "Skipped";
    questionStack[questionStack.length - 1].answer = "Skipped";

    scrollToBottom();

    // Proceed to the next question (adjust as needed for the next step)
    setTimeout(() => askNextQuestion(), 1000); // Replace with the actual function for the next question
}


// Function to ask for additional information
function askAdditionalInformation() {
    questionStack.push({ question: "additionalInformation", answer: null });
    const messageTime = new Date(); // Capture the message time

    // Append question message
    appendMessageWithImageAndTime(
        "Please take the time to type any other additional information about your matter that can help our team. If you don’t have any, please click ‘Skip’",
        'bot-message question-additionalInformation',
        messageTime
    );

    // Create input field with a submit and skip button
    const additionalInfoInput = `
        <div id="additional-info-container" class="chat-input-container question-additionalInformation">
            <textarea id="additional-info-input" placeholder="Type here..." class="chat-textarea"></textarea>
            <div class="action-buttons">
                <button class="option-btn" onclick="skipAdditionalInformation()">Skip</button>
                <button class="submit-icon" onclick="handleAdditionalInformation()">
                    <img src="https://storage.googleapis.com/msgsndr/aJYHtddTenz299BOqzfz/media/66fa91a7923b423d630ec12e.png" alt="submit">
                </button>
            </div>
        </div>
    `;

    document.getElementById('chat-content').insertAdjacentHTML('beforeend', additionalInfoInput);
    scrollToBottom();
}

// Function to handle additional information input
function handleAdditionalInformation() {
    const additionalInfo = document.getElementById('additional-info-input').value.trim();

    if (!additionalInfo) {
        alert('Please provide some details or skip if you have nothing to add.');
        return;
    }

    // Remove the input container after submission
    document.getElementById('additional-info-container').remove();

    // Append the user's input to the chat and store it in collectedData
    appendSubmittedMessage(additionalInfo, 'user-message question-additionalInformation', true); // Add 'true' to show the Undo button
    collectedData.additionalInformation = additionalInfo;
    questionStack[questionStack.length - 1].answer = additionalInfo;

    scrollToBottom();

    // Proceed to the next question or wrap up the conversation
    setTimeout(() => askHowDidYouFindUs(), 1000); // Replace `askNextQuestion()` with the actual function for the next step
}

// Function to handle skipping additional information input
function skipAdditionalInformation() {
    // Remove the input container after skipping
    document.getElementById('additional-info-container').remove();

    // Append "Skipped" message to the chat
    appendSubmittedMessage("Skipped", 'user-message question-additionalInformation', true); // Add 'true' to show the Undo button
    collectedData.additionalInformation = "Skipped";
    questionStack[questionStack.length - 1].answer = "Skipped";

    scrollToBottom();

    // Proceed to the next question or wrap up the conversation
    setTimeout(() => askNextQuestion(), 1000); // Replace `askNextQuestion()` with the actual function for the next step
}


// Function to ask about tribe affiliation
function askTribeAffiliation() {
    questionStack.push({ question: "tribeAffiliation", answer: null });
    const messageTime = new Date(); // Capture the message time

    // Append question message
    appendMessageWithImageAndTime(
        "Which tribe do you belong to?", 
        'bot-message question-tribeAffiliation', 
        messageTime
    );

    // Create input field for tribe affiliation
    const tribeAffiliationInput = `
        <div id="tribe-affiliation-input-container" class="chat-input-container question-tribeAffiliation">
            <textarea id="tribe-affiliation-input" placeholder="Type here..." class="chat-textarea"></textarea>
            <button class="submit-icon" onclick="handleTribeAffiliationSubmission()">
                <img src="https://storage.googleapis.com/msgsndr/aJYHtddTenz299BOqzfz/media/66fa91a7923b423d630ec12e.png" alt="submit">
            </button>
        </div>
    `;

    // Append the input field to the chat content
    document.getElementById('chat-content').insertAdjacentHTML('beforeend', tribeAffiliationInput);
    scrollToBottom();
}

// Function to handle tribe affiliation submission
function handleTribeAffiliationSubmission() {
    const tribeAffiliation = document.getElementById('tribe-affiliation-input').value.trim();
    
    if (!tribeAffiliation) {
        alert('Please enter your tribe affiliation or skip if not applicable.');
        return;
    }

    // Remove the input container after submission
    document.getElementById('tribe-affiliation-input-container').remove();

    // Append the user's input to the chat and store it in collectedData
    appendSubmittedMessage(tribeAffiliation, 'user-message question-tribeAffiliation', true); // Add 'true' to show the Undo button
    collectedData.tribeAffiliation = tribeAffiliation;
    questionStack[questionStack.length - 1].answer = tribeAffiliation;

    scrollToBottom();

    // Proceed to the next question (replace `askNextQuestion` with the actual function for the next question)
    setTimeout(() => askOtherPartiesTribalAffiliations(), 1000);
}

// Function to ask about other parties' tribal affiliations
function askOtherPartiesTribalAffiliations() {
    questionStack.push({ question: "otherPartiesTribalAffiliations", answer: null });
    const messageTime = new Date(); // Capture the message time

    // Append question message
    appendMessageWithImageAndTime(
        "Please list any other parties involved and their tribal affiliations.", 
        'bot-message question-otherPartiesTribalAffiliations', 
        messageTime
    );

    // Create input field for listing other parties and their tribal affiliations
    const otherPartiesInput = `
        <div id="other-parties-input-container" class="chat-input-container question-otherPartiesTribalAffiliations">
            <textarea id="other-parties-input" placeholder="Type here..." class="chat-textarea"></textarea>
            <button class="submit-icon" onclick="handleOtherPartiesSubmission()">
                <img src="https://storage.googleapis.com/msgsndr/aJYHtddTenz299BOqzfz/media/66fa91a7923b423d630ec12e.png" alt="submit">
            </button>
        </div>
    `;

    // Append the input field to the chat content
    document.getElementById('chat-content').insertAdjacentHTML('beforeend', otherPartiesInput);
    scrollToBottom();
}

// Function to handle submission of other parties' tribal affiliations
function handleOtherPartiesSubmission() {
    const otherParties = document.getElementById('other-parties-input').value.trim();
    
    if (!otherParties) {
        alert('Please provide details or skip if not applicable.');
        return;
    }

    // Remove the input container after submission
    document.getElementById('other-parties-input-container').remove();

    // Append the user's input to the chat and store it in collectedData
    appendSubmittedMessage(otherParties, 'user-message question-otherPartiesTribalAffiliations', true); // Add 'true' to show the Undo button
    collectedData.otherPartiesTribalAffiliations = otherParties;
    questionStack[questionStack.length - 1].answer = otherParties;

    scrollToBottom();

    // Proceed to the next question (replace `askNextQuestion` with the actual function for the next question)
    setTimeout(() => askTypeOfCase(), 1000);
}

// Function to ask about the type of case
function askTypeOfCase() {
    questionStack.push({ question: "typeOfCase", answer: null });
    const messageTime = new Date(); // Capture the message time

    // Append question message
    appendMessageWithImageAndTime(
        "What type of case?", 
        'bot-message question-typeOfCase', 
        messageTime
    );

    // Create options for case type
    const typeOfCaseOptions = `
        <div id="type-of-case-options" class="chat-options question-typeOfCase">
            <button class="option-btn" onclick="handleTypeOfCaseSelection('Divorce')">Divorce</button>
            <button class="option-btn" onclick="handleTypeOfCaseSelection('Child Custody')">Child Custody</button>
            <button class="option-btn" onclick="handleTypeOfCaseSelection('Other family law case')">Other family law case</button>
        </div>
    `;

    // Append the options to the chat content
    document.getElementById('chat-content').insertAdjacentHTML('beforeend', typeOfCaseOptions);
    scrollToBottom();
}

// Function to handle type of case selection
function handleTypeOfCaseSelection(selection) {
    if (!selection) {
        alert('Please select an option.');
        return;
    }

    // Remove the options after selection
    const optionsElement = document.getElementById('type-of-case-options');
    if (optionsElement) {
        optionsElement.remove();
    }

    // Append the user's choice to the chat and store it in collectedData
    appendSubmittedMessage(selection, 'user-message question-typeOfCase', true); // Add 'true' to show the Undo button
    collectedData.typeOfCase = selection;
    questionStack[questionStack.length - 1].answer = selection;

    scrollToBottom();

    // Proceed to the next question based on the type of case selected
    setTimeout(() => {
        if (selection === 'Divorce') {
            askChildrenInvolved(); // Replace with the function to ask specific questions for divorce cases
        } else if (selection === 'Child Custody') {
            askChildCustodyDetails(); // Replace with the function to ask specific questions for child custody cases
        } else if (selection === 'Other family law case') {
            askAdditionalInformation(); // Replace with the function to ask specific questions for other family law cases
        } else {
            askChildrenInvolved(); // Default to next question if no specific function is required
        }
    }, 1000); // Adjust delay as needed
}


// Function to ask if children are involved
function askChildrenInvolved() {
    questionStack.push({ question: "childrenInvolved", answer: null });
    const messageTime = new Date(); // Capture the message time

    // Append question message
    appendMessageWithImageAndTime(
        "Are there children involved?", 
        'bot-message question-childrenInvolved', 
        messageTime
    );

    // Create options for children involved
    const childrenInvolvedOptions = `
        <div id="children-involved-options" class="chat-options question-childrenInvolved">
            <button class="option-btn" onclick="handleChildrenInvolvedSelection('Yes')">Yes</button>
            <button class="option-btn" onclick="handleChildrenInvolvedSelection('No')">No</button>
        </div>
    `;

    // Append the options to the chat content
    document.getElementById('chat-content').insertAdjacentHTML('beforeend', childrenInvolvedOptions);
    scrollToBottom();
}

// Function to handle selection of children involvement
function handleChildrenInvolvedSelection(selection) {
    if (!selection) {
        alert('Please select an option.');
        return;
    }

    // Remove the options after selection
    const optionsElement = document.getElementById('children-involved-options');
    if (optionsElement) {
        optionsElement.remove();
    }

    // Append the user's choice to the chat and store it in collectedData
    appendSubmittedMessage(selection, 'user-message question-childrenInvolved', true); // Add 'true' to show the Undo button
    collectedData.childrenInvolved = selection;
    questionStack[questionStack.length - 1].answer = selection;

    scrollToBottom();

    // Proceed to the next question based on selection
    if (selection === 'Yes') {
        setTimeout(() => askAdditionalInformation(), 1000); // Proceed to ask details about child custody if "Yes"
    } else {
        setTimeout(() => askAdditionalInformation(), 1000); // Proceed to the next question if "No"
    }
}

// Function to ask for additional information
function askAdditionalInformation() {
    questionStack.push({ question: "additionalInformation", answer: null });
    const messageTime = new Date(); // Capture the message time

    // Append question message
    appendMessageWithImageAndTime(
        "Please provide any additional information regarding this matter in the box below.", 
        'bot-message question-additionalInformation', 
        messageTime
    );

    // Create an input field for the user to type their response
    const inputFieldContainer = `
        <div id="additional-info-container" class="chat-input-container question-additionalInformation">
            <textarea id="additional-info-input" placeholder="Type here..." class="chat-textarea"></textarea>
            <button class="submit-icon" onclick="handleAdditionalInformation()">
                <img src="https://storage.googleapis.com/msgsndr/aJYHtddTenz299BOqzfz/media/66fa91a7923b423d630ec12e.png" alt="submit">
            </button>
        </div>
    `;

    // Append the input field to the chat content
    document.getElementById('chat-content').insertAdjacentHTML('beforeend', inputFieldContainer);
    scrollToBottom();
}

// Function to handle submission of additional information
function handleAdditionalInformation() {
    const additionalInfo = document.getElementById('additional-info-input').value.trim();
    
    if (!additionalInfo) {
        alert('Please provide some details or skip if you have nothing to add.');
        return;
    }

    // Remove the input container after submission
    document.getElementById('additional-info-container').remove();

    // Append the user's input to the chat and store it in collectedData
    appendSubmittedMessage(additionalInfo, 'user-message question-additionalInformation', true); // Add 'true' to show the Undo button
    collectedData.additionalInformation = additionalInfo;
    questionStack[questionStack.length - 1].answer = additionalInfo;

    scrollToBottom();

    // Proceed to the next question or wrap up the conversation
    setTimeout(() => askHowDidYouFindUs(), 1000); // Replace `askNextQuestion()` with the actual function for the next step
}

// Function to ask the type of product the user is looking to purchase
function askProductType() {
    questionStack.push({ question: "productType", answer: null });
    const messageTime = new Date(); // Capture the message time

    // Append question message
    appendMessageWithImageAndTime(
        "What type of product are you looking at purchasing?", 
        'bot-message question-productType', 
        messageTime
    );

    // Create a text input field for the user's response
    const productTypeInput = `
        <div id="product-type-input" class="chat-input-container question-productType">
            <textarea id="product-type-textarea" placeholder="Type here..." class="chat-textarea"></textarea>
            <button class="submit-icon" onclick="handleProductTypeInput()">
                <img src="https://storage.googleapis.com/msgsndr/aJYHtddTenz299BOqzfz/media/66fa91a7923b423d630ec12e.png" alt="submit">
            </button>
        </div>
    `;

    // Append the input field to the chat content
    document.getElementById('chat-content').insertAdjacentHTML('beforeend', productTypeInput);
    scrollToBottom();
}

// Function to handle the user's input for product type
function handleProductTypeInput() {
    const productType = document.getElementById('product-type-textarea').value.trim();

    if (!productType) {
        alert('Please enter the type of product.');
        return;
    }

    // Remove the input container after submission
    document.getElementById('product-type-input').remove();

    // Append the user's input to the chat and store it in collectedData
    appendSubmittedMessage(productType, 'user-message question-productType', true); // Add 'true' to show the Undo button
    collectedData.productType = productType;
    questionStack[questionStack.length - 1].answer = productType;

    scrollToBottom();

    // Proceed to the next question (replace `askNextQuestion` with the actual next question function)
    setTimeout(() => askContractWithSeller(), 1000); // Adjust as needed for the next question
}

// Function to ask if the user currently has a contract with the seller
function askContractWithSeller() {
    questionStack.push({ question: "contractWithSeller", answer: null });
    const messageTime = new Date(); // Capture the message time

    // Append question message
    appendMessageWithImageAndTime(
        "Do you currently have a contract with the seller?", 
        'bot-message question-contractWithSeller', 
        messageTime
    );

    // Create Yes/No buttons for contract with seller
    const contractOptions = `
        <div id="contract-seller-options" class="chat-options question-contractWithSeller">
            <button class="option-btn" onclick="handleContractWithSellerSelection('Yes')">Yes</button>
            <button class="option-btn" onclick="handleContractWithSellerSelection('No')">No</button>
        </div>
    `;

    // Append the options to the chat content
    document.getElementById('chat-content').insertAdjacentHTML('beforeend', contractOptions);
    scrollToBottom();
}

// Function to handle selection for contract with seller
function handleContractWithSellerSelection(selection) {
    if (!selection) {
        alert('Please select an option.');
        return;
    }

    // Remove the options after selection
    const optionsElement = document.getElementById('contract-seller-options');
    if (optionsElement) {
        optionsElement.remove();
    }

    // Append the user's choice to the chat and store it in collectedData
    appendSubmittedMessage(selection, 'user-message question-contractWithSeller', true); // Add 'true' to show the Undo button
    collectedData.contractWithSeller = selection;
    questionStack[questionStack.length - 1].answer = selection;

    scrollToBottom();

    // Proceed to the next question based on selection
    if (selection === 'Yes') {
        setTimeout(() => askContractBroken(), 1000); // Adjust as needed for the next question if "Yes"
    } else {
        setTimeout(() => askNegotiationAssistance(), 1000); // Adjust as needed for the next question if "No"
    }
}


function askServiceType() {
    questionStack.push({ question: "serviceType", answer: null });
    const messageTime = new Date(); // Capture the message time

    // Append question message
    appendMessageWithImageAndTime(
        "What type of services are you looking at purchasing?", 
        'bot-message question-serviceType', 
        messageTime
    );

    // Create an input field for the user to type their response
    const inputFieldContainer = `
        <div id="service-type-container" class="chat-input-container question-serviceType">
            <textarea id="service-type-input" placeholder="Type here..." class="chat-textarea"></textarea>
            <button class="submit-icon" onclick="handleServiceType()">
                <img src="https://storage.googleapis.com/msgsndr/aJYHtddTenz299BOqzfz/media/66fa91a7923b423d630ec12e.png" alt="submit">
            </button>
        </div>
    `;

    // Append the input field to the chat content
    document.getElementById('chat-content').insertAdjacentHTML('beforeend', inputFieldContainer);
    scrollToBottom();
}

function handleServiceType() {
    const serviceType = document.getElementById('service-type-input').value.trim();

    if (!serviceType) {
        alert('Please enter the type of services you are looking for.');
        return;
    }

    // Remove the input container after submission
    document.getElementById('service-type-container').remove();

    // Append the user's input to the chat and store it in collectedData
    appendSubmittedMessage(serviceType, 'user-message question-serviceType', true); // Add 'true' to show the Undo button
    collectedData.serviceType = serviceType;
    questionStack[questionStack.length - 1].answer = serviceType;

    scrollToBottom();

    // Proceed to the next question (replace `askNextQuestion` with the actual function for the next question)
    setTimeout(() => askContractWithProvider(), 1000); // Adjust as needed for the next question
}

// Function to ask about a contract with a potential provider
function askContractWithProvider() {
    questionStack.push({ question: "contractWithProvider", answer: null });
    const messageTime = new Date(); // Capture the message time

    // Append question message
    appendMessageWithImageAndTime(
        "Do you currently have a contract with a potential provider?", 
        'bot-message question-contractWithProvider', 
        messageTime
    );

    // Create Yes/No buttons
    const yesNoOptions = `
        <div id="contract-provider-options" class="chat-options question-contractWithProvider">
            <button class="option-btn" onclick="handleContractWithProviderSelection('Yes')">Yes</button>
            <button class="option-btn" onclick="handleContractWithProviderSelection('No')">No</button>
        </div>
    `;

    // Append the buttons to chat content
    document.getElementById('chat-content').insertAdjacentHTML('beforeend', yesNoOptions);
    scrollToBottom();
}

// Function to handle contract with provider selection
function handleContractWithProviderSelection(selection) {
    if (!selection) {
        alert('Please select an option.');
        return;
    }

    // Remove the options after selection
    const optionsElement = document.getElementById('contract-provider-options');
    if (optionsElement) {
        optionsElement.remove();
    }

    // Append the user's choice to the chat and store it in collectedData
    appendSubmittedMessage(selection, 'user-message question-contractWithProvider', true); // Add 'true' to show the Undo button
    collectedData.contractWithProvider = selection;
    questionStack[questionStack.length - 1].answer = selection;

    scrollToBottom();

    // Proceed to the next question based on selection
    if (selection === 'Yes') {
        setTimeout(() => askContractBroken(), 1000); // Replace `askContractDetails()` with the question if the answer is "Yes"
    } else {
        setTimeout(() => askNegotiationAssistance(), 1000); // Replace `askAlternativeOptions()` with the question if the answer is "No"
    }
}

// Function to ask if the contract has been broken
function askContractBroken() {
    questionStack.push({ question: "contractBroken", answer: null });
    const messageTime = new Date(); // Capture the message time

    // Append question message
    appendMessageWithImageAndTime(
        "Has that contract been broken?", 
        'bot-message question-contractBroken', 
        messageTime
    );

    // Create options for contract broken status
    const contractBrokenOptions = `
        <div id="contract-broken-options" class="chat-options question-contractBroken">
            <button class="option-btn" onclick="handleContractBrokenSelection('Yes')">Yes</button>
            <button class="option-btn" onclick="handleContractBrokenSelection('No')">No</button>
        </div>
    `;

    // Append the options to the chat content
    document.getElementById('chat-content').insertAdjacentHTML('beforeend', contractBrokenOptions);
    scrollToBottom();
}

// Function to handle contract broken selection
function handleContractBrokenSelection(selection) {
    if (!selection) {
        alert('Please select an option.');
        return;
    }

    // Remove the options after selection
    const optionsElement = document.getElementById('contract-broken-options');
    if (optionsElement) {
        optionsElement.remove();
    }

    // Append the user's choice to the chat and store it in collectedData
    appendSubmittedMessage(selection, 'user-message question-contractBroken', true); // Add 'true' to show the Undo button
    collectedData.contractBroken = selection;
    questionStack[questionStack.length - 1].answer = selection;

    scrollToBottom();

    // Proceed to the next question based on selection
    if (selection === 'Yes') {
        setTimeout(() => askEndContract(), 1000); // Replace `askResolutionSteps()` with the next question function if "Yes"
    } else {
        setTimeout(() => askEndContract(), 1000); // Replace `askContractStatus()` with the next question function if "No"
    }
}

// Function to ask if assistance is required for negotiation
function askNegotiationAssistance() {
    questionStack.push({ question: "negotiationAssistance", answer: null });
    const messageTime = new Date(); // Capture the message time

    // Append question message
    appendMessageWithImageAndTime(
        "Do you require assistance negotiating with the seller?", 
        'bot-message question-negotiationAssistance', 
        messageTime
    );

    // Create options for negotiation assistance
    const negotiationAssistanceOptions = `
        <div id="negotiation-assistance-options" class="chat-options question-negotiationAssistance">
            <button class="option-btn" onclick="handleNegotiationAssistanceSelection('Yes')">Yes</button>
            <button class="option-btn" onclick="handleNegotiationAssistanceSelection('No')">No</button>
            <button class="option-btn" onclick="handleNegotiationAssistanceSelection('Not sure')">Not sure</button>
        </div>
    `;

    // Append the options to the chat content
    document.getElementById('chat-content').insertAdjacentHTML('beforeend', negotiationAssistanceOptions);
    scrollToBottom();
}

// Function to handle negotiation assistance selection
function handleNegotiationAssistanceSelection(selection) {
    if (!selection) {
        alert('Please select an option.');
        return;
    }

    // Remove the options after selection
    const optionsElement = document.getElementById('negotiation-assistance-options');
    if (optionsElement) {
        optionsElement.remove();
    }

    // Append the user's choice to the chat and store it in collectedData
    appendSubmittedMessage(selection, 'user-message question-negotiationAssistance', true); // Add 'true' to show the Undo button
    collectedData.negotiationAssistance = selection;
    questionStack[questionStack.length - 1].answer = selection;

    scrollToBottom();

    // Proceed to the next question based on selection
    if (selection === 'Yes') {
        setTimeout(() => askAdditionalDetails(), 1000); // Replace `askNextStepForYes()` with the function for the next question if "Yes"
    } else if (selection === 'No') {
        setTimeout(() => askContractForPurchase(), 1000); // Replace `askNextStepForNo()` with the function for the next question if "No"
    } else {
        setTimeout(() => askContractForPurchase(), 1000); // Replace `askNextStepForNotSure()` with the function for the next question if "Not sure"
    }
}

// Function to ask if the user wishes to end the contract
function askEndContract() {
    questionStack.push({ question: "endContract", answer: null });
    const messageTime = new Date(); // Capture the message time

    // Append question message
    appendMessageWithImageAndTime(
        "Do you wish to end the contract?", 
        'bot-message question-endContract', 
        messageTime
    );

    // Create options for ending the contract
    const endContractOptions = `
        <div id="end-contract-options" class="chat-options question-endContract">
            <button class="option-btn" onclick="handleEndContractSelection('Yes')">Yes</button>
            <button class="option-btn" onclick="handleEndContractSelection('No')">No</button>
            <button class="option-btn" onclick="handleEndContractSelection('Renegotiate terms')">Renegotiate terms</button>
        </div>
    `;

    // Append the options to the chat content
    document.getElementById('chat-content').insertAdjacentHTML('beforeend', endContractOptions);
    scrollToBottom();
}

// Function to handle contract end selection
function handleEndContractSelection(selection) {
    if (!selection) {
        alert('Please select an option.');
        return;
    }

    // Remove the options after selection
    const optionsElement = document.getElementById('end-contract-options');
    if (optionsElement) {
        optionsElement.remove();
    }

    // Append the user's choice to the chat and store it in collectedData
    appendSubmittedMessage(selection, 'user-message question-endContract', true); // Add 'true' to show the Undo button
    collectedData.endContract = selection;
    questionStack[questionStack.length - 1].answer = selection;

    scrollToBottom();

    // Proceed to the next question based on selection
    if (selection === 'Yes') {
        setTimeout(() => askAdditionalDetails(), 1000); // Replace `askNextStepForYes()` with the function for the next question if "Yes"
    } else if (selection === 'No') {
        setTimeout(() => askAdditionalDetails(), 1000); // Replace `askNextStepForNo()` with the function for the next question if "No"
    } else {
        setTimeout(() => askAdditionalDetails(), 1000); // Replace `askNextStepForRenegotiate()` with the function for the next question if "Renegotiate terms"
    }
}

// Function to ask for additional details about the situation
function askAdditionalDetails() {
    questionStack.push({ question: "additionalDetails", answer: null });
    const messageTime = new Date(); // Capture the message time

    // Append question message
    appendMessageWithImageAndTime(
        "Are there any other details that you'd like me to know about the situation?", 
        'bot-message question-additionalDetails', 
        messageTime
    );

    // Create an input field for the user to type their response
    const inputFieldContainer = `
        <div id="additional-details-container" class="chat-input-container question-additionalDetails">
            <textarea id="additional-details-input" placeholder="Type here..." class="chat-textarea"></textarea>
            <button class="submit-icon" onclick="handleAdditionalDetails()">
                <img src="https://storage.googleapis.com/msgsndr/aJYHtddTenz299BOqzfz/media/66fa91a7923b423d630ec12e.png" alt="submit">
            </button>
        </div>
    `;

    // Append the input field to the chat content
    document.getElementById('chat-content').insertAdjacentHTML('beforeend', inputFieldContainer);
    scrollToBottom();
}

// Function to handle submission of additional details
function handleAdditionalDetails() {
    const additionalDetails = document.getElementById('additional-details-input').value.trim();
    
    if (!additionalDetails) {
        alert('Please provide some details or skip if you have nothing to add.');
        return;
    }

    // Remove the input container after submission
    document.getElementById('additional-details-container').remove();

    // Append the user's input to the chat and store it in collectedData
    appendSubmittedMessage(additionalDetails, 'user-message question-additionalDetails', true); // Add 'true' to show the Undo button
    collectedData.additionalDetails = additionalDetails;
    questionStack[questionStack.length - 1].answer = additionalDetails;

    scrollToBottom();

    // Proceed to the next question or wrap up the conversation
    setTimeout(() => askHowDidYouFindUs(), 1000); // Replace `submitData()` with the actual function for the next step
}

// Function to ask if there will be a contract for the purchase
function askContractForPurchase() {
    questionStack.push({ question: "contractForPurchase", answer: null });
    const messageTime = new Date(); // Capture the message time

    // Append question message
    appendMessageWithImageAndTime(
        "Will there be a contract for the purchase?", 
        'bot-message question-contractForPurchase', 
        messageTime
    );

    // Create options for contract for purchase
    const contractOptions = `
        <div id="contract-options" class="chat-options question-contractForPurchase">
            <button class="option-btn" onclick="handleContractForPurchaseSelection('Yes')">Yes</button>
            <button class="option-btn" onclick="handleContractForPurchaseSelection('No')">No</button>
            <button class="option-btn" onclick="handleContractForPurchaseSelection('Not sure')">Not sure</button>
        </div>
    `;

    // Append the options to the chat content
    document.getElementById('chat-content').insertAdjacentHTML('beforeend', contractOptions);
    scrollToBottom();
}

// Function to handle contract for purchase selection
function handleContractForPurchaseSelection(selection) {
    if (!selection) {
        alert('Please select an option.');
        return;
    }

    // Remove the options after selection
    const optionsElement = document.getElementById('contract-options');
    if (optionsElement) {
        optionsElement.remove();
    }

    // Append the user's choice to the chat and store it in collectedData
    appendSubmittedMessage(selection, 'user-message question-contractForPurchase', true); // Add 'true' to show the Undo button
    collectedData.contractForPurchase = selection;
    questionStack[questionStack.length - 1].answer = selection;

    scrollToBottom();

    // Proceed to the next question based on selection
    if (selection === 'Yes') {
        setTimeout(() => askContractDrafter(), 1000); // Replace with the function for the next question if "Yes"
    } else if (selection === 'No') {
        setTimeout(() => askHowCanIHelp(), 1000); // Replace with the function for the next question if "No"
    } else {
        setTimeout(() => askHowCanIHelp(), 1000); // Replace with the function for the next question if "Not sure"
    }
}

// Function to ask who will be drafting the contract
function askContractDrafter() {
    questionStack.push({ question: "contractDrafter", answer: null });
    const messageTime = new Date(); // Capture the message time

    // Append question message
    appendMessageWithImageAndTime(
        "Who will be drafting the contract?", 
        'bot-message question-contractDrafter', 
        messageTime
    );

    // Create options for drafting the contract
    const drafterOptions = `
        <div id="drafter-options" class="chat-options question-contractDrafter">
            <button class="option-btn" onclick="handleContractDrafterSelection('Seller')">Seller</button>
            <button class="option-btn" onclick="handleContractDrafterSelection('Buyer')">Buyer</button>
            <button class="option-btn" onclick="handleContractDrafterSelection('Not sure')">Not sure</button>
        </div>
    `;

    // Append the options to the chat content
    document.getElementById('chat-content').insertAdjacentHTML('beforeend', drafterOptions);
    scrollToBottom();
}

// Function to handle contract drafter selection
function handleContractDrafterSelection(selection) {
    if (!selection) {
        alert('Please select an option.');
        return;
    }

    // Remove the options after selection
    const optionsElement = document.getElementById('drafter-options');
    if (optionsElement) {
        optionsElement.remove();
    }

    // Append the user's choice to the chat and store it in collectedData
    appendSubmittedMessage(selection, 'user-message question-contractDrafter', true); // Add 'true' to show the Undo button
    collectedData.contractDrafter = selection;
    questionStack[questionStack.length - 1].answer = selection;

    scrollToBottom();

    // Proceed to the next question based on selection
    if (selection === 'Seller') {
        setTimeout(() => askContractReview(), 1000); // Replace with the actual function for next question if "Seller"
    } else if (selection === 'Buyer') {
        setTimeout(() => askDraftingHelp(), 1000); // Replace with the actual function for next question if "Buyer"
    } else {
        setTimeout(() => askAdditionalDetails(), 1000); // Replace with the actual function for next question if "Not sure"
    }
}

// Function to ask "How can I help you?" with a text input field
function askHowCanIHelp() {
    questionStack.push({ question: "howCanIHelp", answer: null });
    const messageTime = new Date(); // Capture the message time

    // Append question message
    appendMessageWithImageAndTime(
        "How can I help you?", 
        'bot-message question-howCanIHelp', 
        messageTime
    );

    // Create input field for the user's response
    const helpInputField = `
        <div id="help-input-container" class="chat-input-container question-howCanIHelp">
            <textarea id="help-input" placeholder="Type here..." class="chat-textarea"></textarea>
            <button class="submit-icon" onclick="handleHelpInput()">
                <img src="https://storage.googleapis.com/msgsndr/aJYHtddTenz299BOqzfz/media/66fa91a7923b423d630ec12e.png" alt="submit">
            </button>
        </div>
    `;

    // Append the input field to the chat content
    document.getElementById('chat-content').insertAdjacentHTML('beforeend', helpInputField);
    scrollToBottom();
}

// Function to handle the user's response to "How can I help you?"
function handleHelpInput() {
    const helpText = document.getElementById('help-input').value.trim();
    
    if (!helpText) {
        alert('Please enter your response.');
        return;
    }

    // Remove the input container after submission
    document.getElementById('help-input-container').remove();

    // Append the user's input to the chat and store it in collectedData
    appendSubmittedMessage(helpText, 'user-message question-howCanIHelp', true); // Add 'true' to show the Undo button
    collectedData.howCanIHelp = helpText;
    questionStack[questionStack.length - 1].answer = helpText;

    scrollToBottom();

    // Proceed to the next question or action (replace `askNextQuestion` with the actual next function)
    setTimeout(() => askHowDidYouFindUs(), 1000); // Adjust as needed for the next question
}

// Function to ask if the user would like someone to review the contract
function askContractReview() {
    questionStack.push({ question: "contractReview", answer: null });
    const messageTime = new Date(); // Capture the message time

    // Append question message
    appendMessageWithImageAndTime(
        "Would you like someone to review the contract with you?", 
        'bot-message question-contractReview', 
        messageTime
    );

    // Create Yes/No buttons
    const reviewOptions = `
        <div id="contract-review-options" class="chat-options question-contractReview">
            <button class="option-btn" onclick="handleContractReviewSelection('Yes')">Yes</button>
            <button class="option-btn" onclick="handleContractReviewSelection('No')">No</button>
        </div>
    `;

    // Append the options to the chat content
    document.getElementById('chat-content').insertAdjacentHTML('beforeend', reviewOptions);
    scrollToBottom();
}

// Function to handle contract review selection
function handleContractReviewSelection(selection) {
    if (!selection) {
        alert('Please select an option.');
        return;
    }

    // Remove the options after selection
    const optionsElement = document.getElementById('contract-review-options');
    if (optionsElement) {
        optionsElement.remove();
    }

    // Append the user's choice to the chat and store it in collectedData
    appendSubmittedMessage(selection, 'user-message question-contractReview', true); // Add 'true' to show the Undo button
    collectedData.contractReview = selection;
    questionStack[questionStack.length - 1].answer = selection;

    scrollToBottom();

    // Proceed to the next question based on selection
    if (selection === 'Yes') {
        setTimeout(() => askAdditionalDetails(), 1000); // Adjust with the function to proceed if "Yes"
    } else {
        setTimeout(() => askAdditionalDetails(), 1000); // Adjust with the function to proceed if "No"
    }
}

// Function to ask if the user needs help drafting the contract
function askDraftingHelp() {
    questionStack.push({ question: "draftingHelp", answer: null });
    const messageTime = new Date(); // Capture the message time

    // Append question message
    appendMessageWithImageAndTime(
        "Do you need help drafting the contract?", 
        'bot-message question-draftingHelp', 
        messageTime
    );

    // Create Yes/No buttons
    const draftingHelpOptions = `
        <div id="drafting-help-options" class="chat-options question-draftingHelp">
            <button class="option-btn" onclick="handleDraftingHelpSelection('Yes')">Yes</button>
            <button class="option-btn" onclick="handleDraftingHelpSelection('No')">No</button>
        </div>
    `;

    // Append the options to the chat content
    document.getElementById('chat-content').insertAdjacentHTML('beforeend', draftingHelpOptions);
    scrollToBottom();
}

// Function to handle drafting help selection
function handleDraftingHelpSelection(selection) {
    if (!selection) {
        alert('Please select an option.');
        return;
    }

    // Remove the options after selection
    const optionsElement = document.getElementById('drafting-help-options');
    if (optionsElement) {
        optionsElement.remove();
    }

    // Append the user's choice to the chat and store it in collectedData
    appendSubmittedMessage(selection, 'user-message question-draftingHelp', true); // Add 'true' to show the Undo button
    collectedData.draftingHelp = selection;
    questionStack[questionStack.length - 1].answer = selection;

    scrollToBottom();

    // Proceed to the next question based on selection
    if (selection === 'Yes') {
        setTimeout(() => askAdditionalDetails(), 1000); // Adjust with the function to proceed if "Yes"
    } else {
        setTimeout(() => askAdditionalDetails(), 1000); // Adjust with the function to proceed if "No"
    }
}

// Child Special Needs
function askChildBirthDate() {
    questionStack.push({ question: "childBirthDate", answer: null });
    const messageTime = new Date(); // Capture the message time

    // Append question message
    appendMessageWithImageAndTime(
        "What is the child's birth date?", 
        'bot-message question-childBirthDate', 
        messageTime
    );

    // Create month and year dropdowns
    const birthDateOptions = `
        <div id="birth-date-options" class="chat-options question-childBirthDate">
            <select id="birth-month-select" class="option-select">
                <option class="opt-cstm" value="" disabled selected>Month</option>
                <option class="opt-cstm" value="January">January</option>
                <option class="opt-cstm" value="February">February</option>
                <option class="opt-cstm" value="March">March</option>
                <option class="opt-cstm" value="April">April</option>
                <option class="opt-cstm" value="May">May</option>
                <option class="opt-cstm" value="June">June</option>
                <option class="opt-cstm" value="July">July</option>
                <option class="opt-cstm" value="August">August</option>
                <option class="opt-cstm" value="September">September</option>
                <option class="opt-cstm" value="October">October</option>
                <option class="opt-cstm" value="November">November</option>
                <option class="opt-cstm" value="December">December</option>
            </select>
            <select id="birth-year-select" class="option-select">
                <option class="opt-cstm" value="" disabled selected>Year</option>
                <option class="opt-cstm" value="2020">2020</option>
                <option class="opt-cstm" value="2021">2021</option>
                <option class="opt-cstm" value="2022">2022</option>
                <option class="opt-cstm" value="2023">2023</option>
                <option class="opt-cstm" value="2024">2024</option>
            </select>
            <button class="submit-icon" onclick="handleBirthDateSelection()">
                <img src="https://storage.googleapis.com/msgsndr/aJYHtddTenz299BOqzfz/media/66fa91a7923b423d630ec12e.png" alt="submit">
            </button>
        </div>
    `;

    document.getElementById('chat-content').insertAdjacentHTML('beforeend', birthDateOptions);
    scrollToBottom();
}

// Function to handle birth date selection
function handleBirthDateSelection() {
    const birthMonth = document.getElementById('birth-month-select').value;
    const birthYear = document.getElementById('birth-year-select').value;

    if (!birthMonth || !birthYear) {
        alert('Please select both month and year');
        return;
    }

    // Remove the date options after selection
    const birthDateOptions = document.getElementById('birth-date-options');
    if (birthDateOptions) {
        birthDateOptions.remove();
    }

    // Format the selected birth date
    const birthDate = `${birthMonth} ${birthYear}`;

    // Append the user's choice to the chat and store it in collectedData
    appendSubmittedMessage(birthDate, 'user-message question-childBirthDate', true); // Add 'true' to show the Undo button
    collectedData.childBirthDate = birthDate;
    questionStack[questionStack.length - 1].answer = birthDate;

    scrollToBottom();

    // Proceed to the next question
    setTimeout(() => askDisabilitySinceBirth(), 1000); // Adjust as needed for the next question
}

function askDisabilitySinceBirth() {
    questionStack.push({ question: "disabilitySinceBirth", answer: null });
    const messageTime = new Date(); // Capture the message time

    // Append the question
    appendMessageWithImageAndTime(
        "Was the disability present since birth?", 
        'bot-message question-disabilitySinceBirth', 
        messageTime
    );

    // Create Yes/No buttons
    const yesNoOptions = `
        <div id="disability-options" class="chat-options question-disabilitySinceBirth">
            <button class="option-btn" onclick="handleDisabilitySinceBirth('Yes')">Yes</button>
            <button class="option-btn" onclick="handleDisabilitySinceBirth('No')">No</button>
        </div>
    `;

    // Append the buttons to chat content
    document.getElementById('chat-content').insertAdjacentHTML('beforeend', yesNoOptions);
    scrollToBottom();
}

function handleDisabilitySinceBirth(answer) {
    // Remove the options after selection
    document.getElementById('disability-options').remove();

    // Append the user's choice to the chat and store it in collectedData
    appendSubmittedMessage(answer, 'user-message question-disabilitySinceBirth', true); // Add 'true' to show the Undo button
    collectedData.disabilitySinceBirth = answer;
    questionStack[questionStack.length - 1].answer = answer;

    scrollToBottom();

    // Proceed to the next question
    setTimeout(() => askSchoolAttendance()(), 1000); 
}

function askSchoolAttendance() {
    questionStack.push({ question: "schoolAttendance", answer: null });
    const messageTime = new Date(); // Capture the message time

    // Append question message
    appendMessageWithImageAndTime(
        "Is the child able to attend school?", 
        'bot-message question-schoolAttendance', 
        messageTime
    );

    // Create options for school attendance
    const schoolAttendanceOptions = `
        <div id="school-attendance-options" class="chat-options question-schoolAttendance">
            <button class="option-btn" onclick="handleSchoolAttendanceOption('Yes')">Yes</button>
            <button class="option-btn" onclick="handleSchoolAttendanceOption('Special Needs School')">Special Needs School</button>
            <button class="option-btn" onclick="handleSchoolAttendanceOption('No')">No</button>
        </div>
    `;

    // Append the options to the chat content
    document.getElementById('chat-content').insertAdjacentHTML('beforeend', schoolAttendanceOptions);
    scrollToBottom();
}

function handleSchoolAttendanceOption(selection) {
    // Remove the options after selection
    const optionsElement = document.getElementById('school-attendance-options');
    if (optionsElement) {
        optionsElement.remove();
    }

    // Append the user's choice to the chat and store it in collectedData
    appendSubmittedMessage(selection, 'user-message question-schoolAttendance', true); // Add 'true' to show the Undo button
    collectedData.schoolAttendance = selection;
    questionStack[questionStack.length - 1].answer = selection;

    scrollToBottom();

    // Check selection and proceed to the next question accordingly
    if (selection === 'No') {
        setTimeout(() => askDisabilityClaim(), 1000); // Replace with the actual function for the next question if "No"
    } else {
        setTimeout(() => askIEP504Plan(), 1000); // Replace with the actual function for the next question if not "No"
    }
}

function askIEP504Plan() {
    questionStack.push({ question: "IEP504Plan", answer: null });
    const messageTime = new Date(); // Capture the message time

    // Append question message
    appendMessageWithImageAndTime(
        "Do they currently have an Individualized Educational Plan or 504A plan?", 
        'bot-message question-IEP504Plan', 
        messageTime
    );

    // Create options for IEP/504A plan status
    const IEP504Options = `
        <div id="IEP504-options" class="chat-options question-IEP504Plan">
            <button class="option-btn" onclick="handleIEP504Selection('No')">No</button>
            <button class="option-btn" onclick="handleIEP504Selection('Yes')">Yes</button>
            <button class="option-btn" onclick="handleIEP504Selection('Not in school')">Not in school</button>
        </div>
    `;

    // Append the options to the chat content
    document.getElementById('chat-content').insertAdjacentHTML('beforeend', IEP504Options);
    scrollToBottom();
}

function handleIEP504Selection(selection) {
    // Remove the options after selection
    const optionsElement = document.getElementById('IEP504-options');
    if (optionsElement) {
        optionsElement.remove();
    }

    // Append the user's choice to the chat and store it in collectedData
    appendSubmittedMessage(selection, 'user-message question-IEP504Plan', true); // Add 'true' to show the Undo button
    collectedData.IEP504Plan = selection;
    questionStack[questionStack.length - 1].answer = selection;

    scrollToBottom();

    // Proceed to the next question based on selection
    if (selection === 'No') {
        setTimeout(() => askChildEvaluation(), 1000);
    } else if (selection === 'Not in school') {
        setTimeout(() => askDisabilityClaim(), 1000);
    } else if (selection === 'Yes') {
        setTimeout(() => askSchoolFollowingPlan(), 1000); // Replace `askNextQuestion` with the actual function for the next question after 'Yes'
    }
}

function askDisabilityClaim() {
    questionStack.push({ question: "disabilityClaim", answer: null });
    const messageTime = new Date(); // Capture the message time

    // Append question message
    appendMessageWithImageAndTime(
        "Have you filed a disability claim?", 
        'bot-message question-disabilityClaim', 
        messageTime
    );

    // Create options for filing a disability claim
    const disabilityClaimOptions = `
        <div id="disability-claim-options" class="chat-options question-disabilityClaim">
            <button class="option-btn" onclick="handleDisabilityClaimSelection('Yes')">Yes</button>
            <button class="option-btn" onclick="handleDisabilityClaimSelection('No')">No</button>
        </div>
    `;

    // Append the options to the chat content
    document.getElementById('chat-content').insertAdjacentHTML('beforeend', disabilityClaimOptions);
    scrollToBottom();
}

function handleDisabilityClaimSelection(selection) {
    if (!selection) {
        alert('Please select an option.');
        return;
    }

    // Remove the options after selection
    const optionsElement = document.getElementById('disability-claim-options');
    if (optionsElement) {
        optionsElement.remove();
    }

    // Append the user's choice to the chat and store it in collectedData
    appendSubmittedMessage(selection, 'user-message question-disabilityClaim', true); // Add 'true' to show the Undo button
    collectedData.disabilityClaim = selection;
    questionStack[questionStack.length - 1].answer = selection;

    scrollToBottom();

    // Proceed to the next question based on selection
    if (selection === 'Yes') {
        setTimeout(() => askClaimDenied(), 1000); // Proceed to askClaimDenied if the answer is "Yes"
    } else {
        setTimeout(() => askAdditionalDetails(), 1000); // Proceed to askAdditionalDetails if the answer is "No"
    }
}

function askClaimDenied() {
    questionStack.push({ question: "claimDenied", answer: null });
    const messageTime = new Date(); // Capture the message time

    // Append question message
    appendMessageWithImageAndTime(
        "Has your claim been denied?", 
        'bot-message question-claimDenied', 
        messageTime
    );

    // Create options for claim denied
    const claimDeniedOptions = `
        <div id="claim-denied-options" class="chat-options question-claimDenied">
            <button class="option-btn" onclick="handleClaimDeniedSelection('Yes')">Yes</button>
            <button class="option-btn" onclick="handleClaimDeniedSelection('No')">No</button>
        </div>
    `;

    // Append the options to the chat content
    document.getElementById('chat-content').insertAdjacentHTML('beforeend', claimDeniedOptions);
    scrollToBottom();
}

function handleClaimDeniedSelection(selection) {
    if (!selection) {
        alert('Please select an option.');
        return;
    }

    // Remove the options after selection
    const optionsElement = document.getElementById('claim-denied-options');
    if (optionsElement) {
        optionsElement.remove();
    }

    // Append the user's choice to the chat and store it in collectedData
    appendSubmittedMessage(selection, 'user-message question-claimDenied', true); // Add 'true' to show the Undo button
    collectedData.claimDenied = selection;
    questionStack[questionStack.length - 1].answer = selection;

    scrollToBottom();

    // Proceed to the next question based on the selection
    if (selection === 'Yes') {
        setTimeout(() => askFiledAppeal(), 1000); // Replace with the function to ask about the appeal process if "Yes"
    } else {
        setTimeout(() => askHearingScheduled(), 1000); // Replace with the function to ask about additional support options if "No"
    }
}

function askChildEvaluation() {
    questionStack.push({ question: "childEvaluation", answer: null });
    const messageTime = new Date(); // Capture the message time

    // Append question message
    appendMessageWithImageAndTime(
        "Has the child been evaluated for the plan?", 
        'bot-message question-childEvaluation', 
        messageTime
    );

    // Create options for evaluation
    const evaluationOptions = `
        <div id="evaluation-options" class="chat-options question-childEvaluation">
            <button class="option-btn" onclick="handleChildEvaluationSelection('Yes')">Yes</button>
            <button class="option-btn" onclick="handleChildEvaluationSelection('No')">No</button>
        </div>
    `;
    document.getElementById('chat-content').insertAdjacentHTML('beforeend', evaluationOptions);
    scrollToBottom();
}

function handleChildEvaluationSelection(selection) {
    if (!selection) {
        alert('Please select an option.');
        return;
    }

    // Remove the options after selection
    const optionsElement = document.getElementById('evaluation-options');
    if (optionsElement) {
        optionsElement.remove();
    }

    // Append the user's choice to the chat and store it in collectedData
    appendSubmittedMessage(selection, 'user-message question-childEvaluation', true); // Add 'true' to show the Undo button
    collectedData.childEvaluation = selection;
    questionStack[questionStack.length - 1].answer = selection;

    scrollToBottom();
    setTimeout(() => askNextQuestion(), 1000);
}

function askSchoolFollowingPlan() {
    questionStack.push({ question: "schoolFollowingPlan", answer: null });
    const messageTime = new Date(); // Capture the message time

    // Append question message
    appendMessageWithImageAndTime(
        "Is the school following the plan?", 
        'bot-message question-schoolFollowingPlan', 
        messageTime
    );

    // Create options for following the plan
    const schoolFollowingPlanOptions = `
        <div id="school-following-plan-options" class="chat-options question-schoolFollowingPlan">
            <button class="option-btn" onclick="handleSchoolFollowingPlanSelection('Yes')">Yes</button>
            <button class="option-btn" onclick="handleSchoolFollowingPlanSelection('No')">No</button>
        </div>
    `;

    // Append the options to the chat content
    document.getElementById('chat-content').insertAdjacentHTML('beforeend', schoolFollowingPlanOptions);
    scrollToBottom();
}

function handleSchoolFollowingPlanSelection(selection) {
    // Remove the options after selection
    const optionsElement = document.getElementById('school-following-plan-options');
    if (optionsElement) {
        optionsElement.remove();
    }

    // Append the user's choice to the chat and store it in collectedData
    appendSubmittedMessage(selection, 'user-message question-schoolFollowingPlan', true); // Add 'true' to show the Undo button
    collectedData.schoolFollowingPlan = selection;
    questionStack[questionStack.length - 1].answer = selection;

    scrollToBottom();

    // Proceed to the next question (replace `askNextQuestion` with the actual next question function)
    setTimeout(() => askMeetingScheduled(), 1000);
}

function askMeetingScheduled() {
    questionStack.push({ question: "meetingScheduled", answer: null });
    const messageTime = new Date(); // Capture the message time

    // Append question message
    appendMessageWithImageAndTime(
        "Has the meeting been scheduled?", 
        'bot-message question-meetingScheduled', 
        messageTime
    );

    // Create options for meeting scheduled status
    const meetingScheduledOptions = `
        <div id="meeting-scheduled-options" class="chat-options question-meetingScheduled">
            <button class="option-btn" onclick="handleMeetingScheduledSelection('No')">No</button>
            <button class="option-btn" onclick="handleMeetingScheduledSelection('Yes')">Yes</button>
        </div>
    `;

    // Append the options to the chat content
    document.getElementById('chat-content').insertAdjacentHTML('beforeend', meetingScheduledOptions);
    scrollToBottom();
}

function handleMeetingScheduledSelection(selection) {
    // Remove the options after selection
    const optionsElement = document.getElementById('meeting-scheduled-options');
    if (optionsElement) {
        optionsElement.remove();
    }

    // Append the user's choice to the chat and store it in collectedData
    appendSubmittedMessage(selection, 'user-message question-meetingScheduled', true); // Add 'true' to show the Undo button
    collectedData.meetingScheduled = selection;
    questionStack[questionStack.length - 1].answer = selection;

    scrollToBottom();

    // Proceed to the next question based on the selection
    if (selection === 'Yes') {
        setTimeout(() => askMeetingDate(), 1000); // Replace with the actual function for the next question if "Yes"
    } else {
        setTimeout(() => askDisabilityClaim(), 1000); // Replace with the actual function for the next question if "No"
    }
}

function askMeetingDate() {
    questionStack.push({ question: "meetingDate", answer: null });
    const messageTime = new Date(); // Capture the message time

    // Append question message
    appendMessageWithImageAndTime(
        "When is the meeting?", 
        'bot-message question-meetingDate', 
        messageTime
    );

    // Create date selection options for month and year
    const meetingDateOptions = `
        <div id="meeting-date-options" class="chat-options question-meetingDate">
            <div class="date-selectors">
                <select id="meeting-month-select" class="option-select">
                    <option value="" disabled selected>Month</option>
                    <option value="January">January</option>
                    <option value="February">February</option>
                    <option value="March">March</option>
                    <option value="April">April</option>
                    <option value="May">May</option>
                    <option value="June">June</option>
                    <option value="July">July</option>
                    <option value="August">August</option>
                    <option value="September">September</option>
                    <option value="October">October</option>
                    <option value="November">November</option>
                    <option value="December">December</option>
                </select>
                <select id="meeting-year-select" class="option-select">
                    <option value="" disabled selected>Year</option>
                    ${generateYearOptions(2024, 2030)}
                </select>
            </div>
            <div class="action-buttons">
                <button class="option-btn" onclick="skipMeetingDate()">Skip</button>
                <button class="submit-icon" onclick="handleMeetingDateSelection()">
                    <img src="https://storage.googleapis.com/msgsndr/aJYHtddTenz299BOqzfz/media/66fa91a7923b423d630ec12e.png" alt="submit">
                </button>
            </div>
        </div>
    `;

    // Append the options to the chat content
    document.getElementById('chat-content').insertAdjacentHTML('beforeend', meetingDateOptions);
    scrollToBottom();
}

function generateYearOptions(startYear, endYear) {
    let options = '';
    for (let year = startYear; year <= endYear; year++) {
        options += `<option value="${year}">${year}</option>`;
    }
    return options;
}

function handleMeetingDateSelection() {
    const month = document.getElementById('meeting-month-select').value;
    const year = document.getElementById('meeting-year-select').value;

    if (!month || !year) {
        alert('Please select both month and year');
        return;
    }

    // Remove the date options after selection
    document.getElementById('meeting-date-options').remove();

    // Format the selected date
    const meetingDate = `${month} ${year}`;

    // Append the user's choice to the chat and store it in collectedData
    appendSubmittedMessage(meetingDate, 'user-message question-meetingDate', true); // Add 'true' to show the Undo button
    collectedData.meetingDate = meetingDate;
    questionStack[questionStack.length - 1].answer = meetingDate;

    scrollToBottom();

    // Proceed to the next question (replace `askNextQuestion` with the actual next question function)
    setTimeout(() => askNextQuestion(), 1000);
}

function skipMeetingDate() {
    // Remove the date options after skipping
    document.getElementById('meeting-date-options').remove();

    // Append "Skipped" message to the chat
    appendSubmittedMessage("Skipped", 'user-message question-meetingDate', true); // Add 'true' to show the Undo button
    collectedData.meetingDate = "Skipped";
    questionStack[questionStack.length - 1].answer = "Skipped";

    scrollToBottom();

    // Proceed to the next question (replace `askNextQuestion` with the actual next question function)
    setTimeout(() => askDisabilityClaim(), 1000);
}

function askHearingScheduled() {
    questionStack.push({ question: "hearingScheduled", answer: null });
    const messageTime = new Date(); // Capture the message time

    // Append question message
    appendMessageWithImageAndTime(
        "Is there a hearing scheduled in this matter?", 
        'bot-message question-hearingScheduled', 
        messageTime
    );

    // Create options for hearing scheduled status
    const hearingScheduledOptions = `
        <div id="hearing-scheduled-options" class="chat-options question-hearingScheduled">
            <button class="option-btn" onclick="handleHearingScheduledSelection('Yes')">Yes</button>
            <button class="option-btn" onclick="handleHearingScheduledSelection('No')">No</button>
        </div>
    `;

    // Append the options to the chat content
    document.getElementById('chat-content').insertAdjacentHTML('beforeend', hearingScheduledOptions);
    scrollToBottom();
}

function handleHearingScheduledSelection(selection) {
    if (!selection) {
        alert('Please select an option.');
        return;
    }

    // Remove the options after selection
    const optionsElement = document.getElementById('hearing-scheduled-options');
    if (optionsElement) {
        optionsElement.remove();
    }

    // Append the user's choice to the chat and store it in collectedData
    appendSubmittedMessage(selection, 'user-message question-hearingScheduled', true); // Add 'true' to show the Undo button
    collectedData.hearingScheduled = selection;
    questionStack[questionStack.length - 1].answer = selection;

    scrollToBottom();

    // Proceed to the next question based on the user's selection
    if (selection === 'Yes') {
        setTimeout(() => aaskHearingDate(), 1000); // Replace with the actual function for the next question if "Yes"
    } else {
        setTimeout(() => askMedicaidStatus(), 1000); // Replace with the actual function for the next question if "No"
    }
}

function askFiledAppeal() {
    questionStack.push({ question: "filedAppeal", answer: null });
    const messageTime = new Date(); // Capture the message time

    // Append question message
    appendMessageWithImageAndTime(
        "Have you filed an appeal?", 
        'bot-message question-filedAppeal', 
        messageTime
    );

    // Create options for filing an appeal
    const appealOptions = `
        <div id="appeal-options" class="chat-options question-filedAppeal">
            <button class="option-btn" onclick="handleAppealSelection('No')">No</button>
            <button class="option-btn" onclick="handleAppealSelection('Yes')">Yes</button>
        </div>
    `;

    // Append the options to the chat content
    document.getElementById('chat-content').insertAdjacentHTML('beforeend', appealOptions);
    scrollToBottom();
}

function handleAppealSelection(selection) {
    if (!selection) {
        alert('Please select an option.');
        return;
    }

    // Remove the options after selection
    const optionsElement = document.getElementById('appeal-options');
    if (optionsElement) {
        optionsElement.remove();
    }

    // Append the user's choice to the chat and store it in collectedData
    appendSubmittedMessage(selection, 'user-message question-filedAppeal', true); // Add 'true' to show the Undo button
    collectedData.filedAppeal = selection;
    questionStack[questionStack.length - 1].answer = selection;

    scrollToBottom();

    // Proceed to the next question based on the user's selection
    if (selection === 'Yes') {
        setTimeout(() => askHearingScheduled(), 1000); // Replace with the actual function for the next question if "Yes"
    } else {
        setTimeout(() => askMedicaidStatus(), 1000); // Replace with the actual function for the next question if "No"
    }
}

function askHearingDate() {
    questionStack.push({ question: "hearingDate", answer: null });
    const messageTime = new Date(); // Capture the message time

    // Append question message
    appendMessageWithImageAndTime(
        "When is the hearing?", 
        'bot-message question-hearingDate', 
        messageTime
    );

    // Create dropdowns for month and year selection with Skip and Confirm buttons
    const hearingDateOptions = `
        <div id="hearing-date-options" class="chat-options question-hearingDate">
            <select id="hearing-month-select" class="option-select">
                <option value="" disabled selected>Month</option>
                <option value="January">January</option>
                <option value="February">February</option>
                <option value="March">March</option>
                <option value="April">April</option>
                <option value="May">May</option>
                <option value="June">June</option>
                <option value="July">July</option>
                <option value="August">August</option>
                <option value="September">September</option>
                <option value="October">October</option>
                <option value="November">November</option>
                <option value="December">December</option>
            </select>
            <select id="hearing-year-select" class="option-select">
                <option value="" disabled selected>Year</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
                <option value="2026">2026</option>
                <option value="2027">2027</option>
            </select>
            <button class="option-btn" onclick="handleHearingDateSelection()">Confirm</button>
            <button class="option-btn" onclick="handleHearingDateSkip()">Skip</button>
        </div>
    `;

    // Append the options to the chat content
    document.getElementById('chat-content').insertAdjacentHTML('beforeend', hearingDateOptions);
    scrollToBottom();
}

function handleHearingDateSelection() {
    const hearingMonth = document.getElementById('hearing-month-select').value;
    const hearingYear = document.getElementById('hearing-year-select').value;

    if (!hearingMonth || !hearingYear) {
        alert('Please select both month and year.');
        return;
    }

    // Remove the date options after selection
    document.getElementById('hearing-date-options').remove();

    // Format the selected hearing date
    const hearingDate = `${hearingMonth} ${hearingYear}`;

    // Append the user's choice to the chat and store it in collectedData
    appendSubmittedMessage(hearingDate, 'user-message question-hearingDate', true); // Add 'true' to show the Undo button
    collectedData.hearingDate = hearingDate;
    questionStack[questionStack.length - 1].answer = hearingDate;

    scrollToBottom();

    // Proceed to the next question
    setTimeout(() => askNextQuestion(), 1000); // Replace askNextQuestion() with the actual next question function
}

function handleHearingDateSkip() {
    // Remove the date options after skipping
    document.getElementById('hearing-date-options').remove();

    // Append "Skipped" message to the chat
    appendSubmittedMessage("Skipped", 'user-message question-hearingDate', true);
    collectedData.hearingDate = "Skipped";
    questionStack[questionStack.length - 1].answer = "Skipped";

    scrollToBottom();

    // Proceed to the next question
    setTimeout(() => askNextQuestion(), 1000); // Replace askNextQuestion() with the actual next question function
}

function askMedicaidStatus() {
    questionStack.push({ question: "medicaidStatus", answer: null });
    const messageTime = new Date(); // Capture the message time

    // Append question message
    appendMessageWithImageAndTime(
        "Does the child currently receive Medicaid?", 
        'bot-message question-medicaidStatus', 
        messageTime
    );

    // Create options for Medicaid status
    const medicaidStatusOptions = `
        <div id="medicaid-status-options" class="chat-options question-medicaidStatus">
            <button class="option-btn" onclick="handleMedicaidStatusSelection('Yes')">Yes</button>
            <button class="option-btn" onclick="handleMedicaidStatusSelection('No')">No</button>
        </div>
    `;

    // Append the options to the chat content
    document.getElementById('chat-content').insertAdjacentHTML('beforeend', medicaidStatusOptions);
    scrollToBottom();
}

function handleMedicaidStatusSelection(selection) {
    if (!selection) {
        alert('Please select an option.');
        return;
    }

    // Remove the options after selection
    const optionsElement = document.getElementById('medicaid-status-options');
    if (optionsElement) {
        optionsElement.remove();
    }

    // Append the user's choice to the chat and store it in collectedData
    appendSubmittedMessage(selection, 'user-message question-medicaidStatus', true); // Add 'true' to show the Undo button
    collectedData.medicaidStatus = selection;
    questionStack[questionStack.length - 1].answer = selection;

    scrollToBottom();

    // Proceed to the next question based on selection
    if (selection === 'Yes') {
        setTimeout(() => askInsuranceCoverage(), 1000); // Replace with the function for next question if "Yes"
    } else {
        setTimeout(() => askHealthInsuranceStatus(), 1000); // Replace with the function for next question if "No"
    }
}

function askInsuranceCoverage() {
    questionStack.push({ question: "insuranceCoverage", answer: null });
    const messageTime = new Date(); // Capture the message time

    // Append question message
    appendMessageWithImageAndTime(
        "Are the child's medical treatment covered by their insurance?", 
        'bot-message question-insuranceCoverage', 
        messageTime
    );

    // Create options for insurance coverage status
    const insuranceCoverageOptions = `
        <div id="insurance-coverage-options" class="chat-options question-insuranceCoverage">
            <button class="option-btn" onclick="handleInsuranceCoverageSelection('Yes')">Yes</button>
            <button class="option-btn" onclick="handleInsuranceCoverageSelection('No')">No</button>
        </div>
    `;

    // Append the options to the chat content
    document.getElementById('chat-content').insertAdjacentHTML('beforeend', insuranceCoverageOptions);
    scrollToBottom();
}

function handleInsuranceCoverageSelection(selection) {
    if (!selection) {
        alert('Please select an option.');
        return;
    }

    // Remove the options after selection
    const optionsElement = document.getElementById('insurance-coverage-options');
    if (optionsElement) {
        optionsElement.remove();
    }

    // Append the user's choice to the chat and store it in collectedData
    appendSubmittedMessage(selection, 'user-message question-insuranceCoverage', true); // Add 'true' to show the Undo button
    collectedData.insuranceCoverage = selection;
    questionStack[questionStack.length - 1].answer = selection;

    scrollToBottom();

    // Proceed to the next question (replace `askNextQuestion` with the actual next question function)
    setTimeout(() => askAdditionalDetails(), 1000); // Adjust `askNextQuestion()` as per the flow
}

function askHealthInsuranceStatus() {
    questionStack.push({ question: "healthInsuranceStatus", answer: null });
    const messageTime = new Date(); // Capture the message time

    // Append question message
    appendMessageWithImageAndTime(
        "Is the child currently on health insurance?", 
        'bot-message question-healthInsuranceStatus', 
        messageTime
    );

    // Create options for health insurance status
    const healthInsuranceOptions = `
        <div id="health-insurance-options" class="chat-options question-healthInsuranceStatus">
            <button class="option-btn" onclick="handleHealthInsuranceSelection('Yes')">Yes</button>
            <button class="option-btn" onclick="handleHealthInsuranceSelection('No')">No</button>
        </div>
    `;

    // Append the options to the chat content
    document.getElementById('chat-content').insertAdjacentHTML('beforeend', healthInsuranceOptions);
    scrollToBottom();
}

function handleHealthInsuranceSelection(selection) {
    if (!selection) {
        alert('Please select an option.');
        return;
    }

    // Remove the options after selection
    const optionsElement = document.getElementById('health-insurance-options');
    if (optionsElement) {
        optionsElement.remove();
    }

    // Append the user's choice to the chat and store it in collectedData
    appendSubmittedMessage(selection, 'user-message question-healthInsuranceStatus', true); // Add 'true' to show the Undo button
    collectedData.healthInsuranceStatus = selection;
    questionStack[questionStack.length - 1].answer = selection;

    scrollToBottom();

    // Proceed to the next question (replace `askNextQuestion` with the actual next question function)
    setTimeout(() => askNextQuestion(), 1000); // Adjust `askNextQuestion()` as per the flow
}
