module.exports = ({
name: "rps",
description: "Play rps game with bot",
usage: "rps",
code: `
$awaitReaction[$authorID;15s;
{title:🧠 RPS GAME}
{thumbnail:$userAvatar[$clientID]}
{description:Choose your choice
✊ | **ROCK** 
📄 | **PAPER**
✂ | **SCISSOR**}
{footer:Requested By $userTag[$authorID]:$authorAvatar}
{timestamp}
{color:$getVar[color]}
;✊,📄,✂;rock,paper,scissor;You ran out of time]
`}); 