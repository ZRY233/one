const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
	{
        name: "杀死那个石家庄人",
        artist: '123123',
        url: 'https://m704.music.126.net/20220608141909/00adf66dda94bf5ee648a95b44571267/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/14096602101/5885/7f54/0ff9/b8812a98289f67e5069cefb4732e4ee2.m4a?authSecret=0000018141e0a2fa02460aaba0ac5944',
        cover: 'http://p2.music.126.net/W1kczDCB4-r-uNAznD1ljg==/108851651165850.jpg?param=130y130',
      },
	  {
        name: '这些民谣 - 一次听个够',
        artist: '翁大涵',
        url: 'http://www.ytmp3.cn/down/60222.mp3',
        cover: 'http://p2.music.126.net/Wx5GNJEpay2JbfVUJc4Aew==/109951163094853876.jpg?param=130y130',
      }
    ]
});