---
title: I am ...
---
- Mentally unsound
- Self aware
- Anxious
- Paradoxical 
- Cat person


<style scoped>
ul {
    background: #faebd773;
    margin: 10px;
    padding: 20px;
    list-style: none;
    border-radius: 10px;
    /* padding-left: 0;*/
}

ul li {
  position: relative;
  padding-left: 16px;
padding-block: 7px;
}

ul li::before {
  content: "";
  position: absolute;
  left: 0;

  top: 50%;
  transform: translateY(-50%); /* centers vertically */

  width: 5px;
  height: 1em;
  background: red;
  border-radius: 2px;
}
ul li:nth-child(1)::before { background: #e63946; }
ul li:nth-child(2)::before { background: #f4a261; }
ul li:nth-child(3)::before { background: #2a9d8f; }
ul li:nth-child(4)::before { background: #457b9d; }
ul li:nth-child(5)::before { background: #9b5de5; }
    dark-mode ul li::before{
        background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1jYXQtaWNvbiBsdWNpZGUtY2F0Ij48cGF0aCBkPSJNMTIgNWMuNjcgMCAxLjM1LjA5IDIgLjI2IDEuNzgtMiA1LjAzLTIuODQgNi40Mi0yLjI2IDEuNC41OC0uNDIgNy0uNDIgNyAuNTcgMS4wNyAxIDIuMjQgMSAzLjQ0QzIxIDE3LjkgMTYuOTcgMjEgMTIgMjFzLTktMy05LTcuNTZjMC0xLjI1LjUtMi40IDEtMy40NCAwIDAtMS44OS02LjQyLS41LTcgMS4zOS0uNTggNC43Mi4yMyA2LjUgMi4yM0E5LjA0IDkuMDQgMCAwIDEgMTIgNVoiLz48cGF0aCBkPSJNOCAxNHYuNSIvPjxwYXRoIGQ9Ik0xNiAxNHYuNSIvPjxwYXRoIGQ9Ik0xMS4yNSAxNi4yNWgxLjVMMTIgMTdsLS43NS0uNzVaIi8+PC9zdmc+');
    }
</style>