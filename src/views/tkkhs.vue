<template>
    <h1>TKKHS project.</h1>
    <h1>Say what you want, it won't record it.</h1>
    <div class="input-container">
        <textarea id="textInput" placeholder="Say At Here..." rows="5" wrap="soft"></textarea>
    </div>
    <p>From github, some changes to let it adapt to this page.</p>
</template>
<style>
    .input-container {
      background-color: #ffffff;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
      width: 98%;
    }

    textarea {
      width: 98%;
      height: 200px;
      border: 1px solid #ccc;
      border-radius: 4px;
      padding: 10px;
      font-size: 16px;
      font-family: "Courier New", monospace;
      line-height: 1.5;
      resize: none;
      outline: none;
      transition: all 0.3s ease;
    }

    textarea:focus {
      border-color: #00aeff;
    }

    .placeholder {
      color: #888;
    }
</style>
