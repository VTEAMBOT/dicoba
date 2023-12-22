window.onload = function() {
    const useNodeJS = false; 
    const defaultLiffId = "2001802457-wQ1nlNXP";
    let myLiffId = "2001802457-wQ1nlNXP";

    if (useNodeJS) {
        fetch('/liff/send-id', {
            headers: {"referer": "https://pixiv.net/en/"}}).then(function(reqResponse) {
            return reqResponse.json();
        })
        .then(function(jsonResponse) {
            myLiffId = jsonResponse.id;
            initializeLiff(myLiffId);
        }).catch(function(error) {console.log(error.message, error.code)})} else {myLiffId = defaultLiffId;initializeLiff(myLiffId)}};

function initializeLiff(myLiffId) {
    liff
        .init({
            liffId: myLiffId
        })
        .then(() => {
            sendLiff();
           meProfile();
        })
        .catch((err) => {
            console.log(err);
        });
}

function sendLiff(){
    var tipe = getParameterByName('type');
    if (tipe === 'text') {
        liff.sendMessages([{
            type: 'text',
            text: getParameterByName('text'),
            sentBy: {
                label: "©𝐕𝐓𝐄𝐀𝐌•𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭-𝟐𝟎𝟐𝟑",
                iconUrl: "https://i.ibb.co/n7pzyGj/20220308-173553.jpg",
                linkUrl: "https://vinsenteam.github.io"
            }
        }]).then(function () {liff.closeWindow()})}
    else if (tipe === 'image') {
        liff.sendMessages([{
            type: 'image',
            originalContentUrl: getParameterByName('img'),
            previewImageUrl: getParameterByName('img'),
            sentBy: {
                label: "©𝐕𝐓𝐄𝐀𝐌•𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭-𝟐𝟎𝟐𝟑",
                iconUrl: "https://i.ibb.co/n7pzyGj/20220308-173553.jpg",
                linkUrl: "https://vinsenteam.github.io"
            }
        }]).then(function () {liff.closeWindow()})}
    else if (tipe === 'video') {
        prev = getParameterByName('piu');
        if(prev !== null && prev !== '') {
            dura = prev;
        } else {
            dura = "https://i.ibb.co/n7pzyGj/20220308-173553.jpg";
        }
        liff.sendMessages([{
            type: 'video',
            originalContentUrl: getParameterByName('ocu'),
            previewImageUrl: dura
        }]).then(function () {liff.closeWindow()})}
    else if (tipe === 'audio') {
        duration = getParameterByName('duration');
        if(duration !== null && duration !== '') {
            dura = parseInt(duration);
        } else {
            dura = 60000;
        }
        liff.sendMessages([{
            type: 'audio',
            originalContentUrl: getParameterByName('link'),
            duration: dura
        }]).then(function () {liff.closeWindow()})}
}

//=======================================================================
function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

function getProfile(){
    liff.getProfile().then(function (profile) {
        document.getElementById('userid').textContent = 'Hai  ' + profile.displayName;
        document.getElementById('main').src = profile.pictureUrl;        
        document.getElementById('close').addEventListener('click', function () {
            liff.closeWindow();
        });
    });
}
//=======================================================================

function meProfile(){
    var tipe = getParameterByName('type');
    liff.getProfile().then(function (prof) {
        var stat = prof.statusMessage;
        if (stat == null) {
            var stat = " - ";
        }
        if (stat.length > 60) {
            var stat = "Status Message is to long! Max 60 words";
        }
        if (tipe === 'profile') {
            liff.sendMessages([{
                type: "flex",
                altText: "𝗟𝗜𝗙𝗙 𝗣𝗥𝗢𝗙𝗜𝗟𝗘 𝗧𝗘𝗠𝗣𝗟𝗔𝗧𝗘• 𝐕 𝐓 ΞΛ𝐌",
                contents: { "type": "carousel", "contents": [ { "type": "bubble", "size": "kilo", "body": { "cornerRadius": "lg", "borderWidth": "medium", "borderColor": "#000000", "type": "box", "layout": "vertical", "contents": [ { "type": "image", "url": "https://i.ibb.co/xXBJMrt/images-12.jpg", "size": "full", "aspectMode": "cover", "aspectRatio": "9:16", "gravity": "center" }, { "type": "box", "layout": "vertical", "contents": [ { "type": "text", "text": prof.displayName, "weight": "bold", "color": "#FFFFFF", "align": "center", "gravity": "center", "size": "sm" } ], "position": "absolute", "offsetStart": "49px", "height": "25px", "width": "150px", "offsetBottom": "80px", "offsetEnd": "0px" }, { "type": "box", "layout": "horizontal", "contents": [ { "type": "text", "text": stat, "weight": "regular", "color": "#FFFFFF", "align": "center", "gravity": "top", "size": "xxs", "wrap": true } ], "position": "absolute", "offsetStart": "49px", "height": "30px", "width": "150px", "offsetBottom": "50px", "offsetEnd": "0px", "spacing": "xs" }, { "type": "box", "layout": "vertical", "contents": [ { "type": "text", "text": "•••", "weight": "regular", "color": "#FFFFFF", "align": "center", "gravity": "center", "size": "sm", "style": "normal" } ], "position": "absolute", "offsetStart": "49px", "height": "25px", "width": "150px", "offsetBottom": "20px", "offsetEnd": "0px", "spacing": "none" }, { "type": "box", "layout": "vertical", "contents": [ { "type": "box", "layout": "vertical", "contents": [ { "type": "image", "url": "https://i.ibb.co/09wr5fy/ezgif-com-gif-maker-4.png", "aspectMode": "cover", "size": "full", "animated": true } ], "width": "83px", "height": "83px", "borderWidth": "normal", "cornerRadius": "100px", "position": "absolute" }, { "type": "box", "layout": "vertical", "contents": [ { "type": "image", "url": prof.pictureUrl, "aspectMode": "cover", "size": "full" } ], "width": "62px", "height": "62px", "cornerRadius": "100px", "borderWidth": "light", "offsetTop": "11px", "offsetBottom": "10px", "offsetStart": "11px", "borderColor": "#000000" } ], "position": "absolute", "cornerRadius": "100px", "height": "80px", "width": "80px", "offsetBottom": "100px", "offsetStart": "85px", "offsetEnd": "0px" }, { "type": "image", "url": "https://i.ibb.co/D80Nkwk/ezgif-com-gif-maker-16.png", "position": "absolute", "aspectMode": "cover", "aspectRatio": "9:16", "offsetTop": "0px", "offsetBottom": "0px", "offsetStart": "0px", "offsetEnd": "0px", "size": "full", "animated": true, "action": { "type": "uri", "uri": "https://line.me/ti/p/~xeberlhyn23" } }, { "type": "separator", "color": "#FF0000" }, { "type": "separator", "color": "#FF0000" }, { "type": "box", "layout": "horizontal", "contents": [ { "type": "box", "layout": "baseline", "action": { "type": "uri", "uri": "https://line.me/R/nv/chat" }, "contents": [ { "type": "icon", "url": "https://i.ibb.co/R9CM4kF/email-envelope-outline-shape-with-rounded-corners-icon-icons-com-56530.png", "offsetStart": "6px", "offsetBottom": "0px", "offsetTop": "0px", "offsetEnd": "0px" } ], "flex": 2, "offsetEnd": "0px", "offsetStart": "10px", "offsetBottom": "0px", "offsetTop": "0px" }, { "type": "box", "layout": "baseline", "action": { "type": "uri", "uri": "https://line.me/R/calls" }, "contents": [ { "type": "icon", "url": "https://i.ibb.co/rpKPFrG/1616601417771.png", "offsetTop": "0px", "offsetBottom": "0px", "offsetStart": "5px", "offsetEnd": "0px" } ], "flex": 2, "offsetTop": "0px", "offsetBottom": "0px", "offsetStart": "0px", "offsetEnd": "0px" }, { "type": "box", "layout": "baseline", "action": { "type": "uri", "uri": "https://line.me/R/nv/settings" }, "contents": [ { "type": "icon", "url": "https://i.ibb.co/8rdC2Gh/1616601317007.png", "offsetTop": "0px", "offsetBottom": "0px", "offsetStart": "7px", "offsetEnd": "0px" } ], "flex": 2, "offsetTop": "0px", "offsetBottom": "0px", "offsetStart": "-10px", "offsetEnd": "0px" } ], "backgroundColor": "#FFFFFFcc", "spacing": "80px", "flex": 2 } ], "paddingAll": "0px" }, "styles": { "body": { "backgroundColor": "#000000" } } } ] }
            }]).then(function () {liff.closeWindow()})}})

        if (tipe === 'token') {
            apihost    =  "https://api.imjustgood.com/lineqr"
            headers    =  {"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) Chrome/51.0.2704.106","Apikey": "Bebek89","appName": "DESKTOPWIN\t7.13.2\tWindows\t10.0","sysName": "VTEAM","cert": none}
            params     =  {
                "style": 2, # 1 or 2 // 1=square, 2=round (int)
                "size": 500, # 100 - 500 (int)
                "border": 164, # 50 - 164 (int)
                "background": "#ffffff", # hex color code (str)
                "foreground": "000000" # hex color code (str)
            }
            file       =  {"logo": open("logo.jpg", "rb") }
            response   =  requests.post(apihost, headers=headers, params=params, files=file).json()
            liff.sendMessages([{
                response["result"]["qr"]
            }]).then(function () {liff.closeWindow()})}})



}
