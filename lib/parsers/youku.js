function G(a, c) {
	for (var b = [], f = 0; f < a.length; f++) {
		for (var d = 0, d = "a" <= a[f] && "z" >= a[f] ? a[f].charCodeAt(0) - 97 : a[f] - 0 + 26, g = 0; 36 > g; g++) if (c[g] == d) {
			d = g;
			break
		}
		b[f] = 25 < d ? d - 26 : String.fromCharCode(d + 97)
	}
	return b.join("")
}

function F(a, c) {
	for (var b = [], f = 0, d, g = "", h = 0; 256 > h; h++) b[h] = h;
	for (h = 0; 256 > h; h++) f = (f + b[h] + a.charCodeAt(h % a.length)) % 256, d = b[h], b[h] = b[f], b[f] = d;
	for (var p = f = h = 0; p < c.length; p++) h = (h + 1) % 256, f = (f + b[h]) % 256, d = b[h], b[h] = b[f], b[f] = d, g += String.fromCharCode(c.charCodeAt(p) ^ b[(b[h] + b[f]) % 256]);
	return g
}


function E(a) {
	if (!a) return "";
	var a = a.toString(),
		c, b, f, d, g, h;
	f = a.length;
	b = 0;
	for (c = ""; b < f;) {
		d = a.charCodeAt(b++) & 255;
		if (b == f) {
			c += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(d >> 2);
			c += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt((d & 3) << 4);
			c += "==";
			break
		}
		g = a.charCodeAt(b++);
		if (b == f) {
			c += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(d >> 2);
			c += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt((d & 3) << 4 | (g & 240) >> 4);
			c += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt((g & 15) << 2);
			c += "=";
			break
		}
		h = a.charCodeAt(b++);
		c += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(d >> 2);
		c += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt((d & 3) << 4 | (g & 240) >> 4);
		c += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt((g & 15) << 2 | (h & 192) >> 6);
		c += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(h & 63)
	}
	return c
};


function pa(a) {
    if (!a)
        return "";
    var a = a.toString(), c, b, f, i, d, h = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1, 26, 27, 
        28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1];
    i = a.length;
    f = 0;
    for (d = ""; f < i; ) {
        do
            c = h[a.charCodeAt(f++) & 255];
        while (f < i && -1 == c);
        if (-1 == c)
            break;
        do
            b = h[a.charCodeAt(f++) & 255];
        while (f < i && -1 == b);
        if (-1 == b)
            break;
        d += String.fromCharCode(c << 2 | (b & 48) >> 4);
        do {
            c = a.charCodeAt(f++) & 255;
            if (61 == c)
                return d;
            c = h[c]
        } while (f < i && -1 == c);
        if (-1 == c)
            break;
        d += String.fromCharCode((b & 15) << 4 | (c & 60) >> 2);
        do {
            b = a.charCodeAt(f++) & 255;
            if (61 == b)
                return d;
            b = h[b]
        } while (f < i && -1 == b);
        if (-1 == b)
            break;
        d += String.fromCharCode((c & 
        3) << 6 | b)
    }
    return d
}





function getSidToken(a){
	var c = F(G("b4eto0b4", [19, 1, 4, 7, 30, 14, 28, 8, 24, 17, 6, 35, 34, 16, 9, 10, 13, 22, 32, 29, 31, 21, 18, 3, 2, 23, 25, 27, 11, 20, 5, 15, 12, 0, 33, 26]).toString(), pa(a.ep));
	userCache = userCache || {};
	userCache.sid = c.split("_")[0];
	userCache.token = c.split("_")[1];

	return userCache;
}


function getM3u8Src(a){

	var d = getSidToken(a);
	var url = "http://pl.youku.com/playlist/m3u8?";

	var f = encodeURIComponent(E(F(G("boa4poz1", [19, 1, 4, 7, 30, 14, 28, 8, 24, 17, 6, 35, 34, 16, 9, 10, 13, 22, 32, 29, 31, 21, 18, 3, 2, 23, 25, 27, 11, 20, 5, 15, 12, 0, 33, 26]).toString(), d.sid + "_" + a.vid + "_" + d.token)));

	url += "vid="+a.vid+"&";
	url += "type=flv&";
	url += "ts=1436086071&";
	url += "keyframe=0&";

	url += "ep="+f+"&";
	url += "sid="+d.sid+"&";
	url += "token="+d.token+"&";
	url += "ctype=12&";
	url += "ev=1&";
	url += "oip=1961468014";

	return url;
}



//  for FileID
function U(a) {
    this._randomSeed = a;
    this.cg_hun()
};

U.prototype = {
	cg_hun: function() {
        this._cgStr = "";
        for (var a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ/\\:._-1234567890", c = a.length, b = 0; b < c; b++) {
            var f = parseInt(this.ran() * a.length);
            this._cgStr += a.charAt(f);
            a = a.split(a.charAt(f)).join("")
        }
    },
    cg_fun: function(a) {
        for (var a = a.split("*"), c = "", b = 0; b < a.length - 1; b++)
            c += this._cgStr.charAt(a[b]);
        return c
    },
    ran: function() {
        this._randomSeed = (211 * this._randomSeed + 
        30031) % 65536;
        return this._randomSeed / 65536
    }
};


var userCache = {};


function videoParse(a, c){
	this._sid = userCache.sid;
	this._seed = a.seed;
	this._fileType = c;
	var b = new U(a.seed);
	this._streamFileIds = a.streamfileids;
	this._videoSegsDic = {};
	for (c in a.segs) {
	    for (var f = [], i = 0, g = 0; g < a.segs[c].length; g++) {
	        var h = a.segs[c][g], p = {};
	        p.no = h.no;
	        p.size = h.size;
	        p.seconds = h.seconds;
	        h.k && (p.key = h.k);
	        p.fileId = this.getFileId(a.streamfileids, c, parseInt(g), b);
	        p.type = c;
	        p.src = this.getVideoSrc(h.no, 
	        a, c, p.fileId);
	        f[i++] = p
	    }
	    this._videoSegsDic[c] = f
	}
}

videoParse.prototype = {

    // a = streamfileids
    // c = fileType
    // b = segs.no
    // f = U f
	getFileId: function(a, c, b, f) {
        for (var d in a)
            if (d == c) {
                streamFid = a[d];
                break
            }
        if ("" == streamFid)
            return "";
        c = f.cg_fun(streamFid);
        a = c.slice(0, 8);
        b = b.toString(16);
        1 == b.length && (b = "0" + b);
        b = b.toUpperCase();
        c = c.slice(10, c.length);
        return a + b + c
    },


    // a = seg.no
    // c = all
    // e = fileType
    // f = fileID
    getVideoSrc: function(a, c, e, f, i, g) {
        if (!c.videoid || !e)
            return "";
        var h = {flv: 0,flvhd: 0,mp4: 1,hd2: 2,"3gphd": 1,"3gp": 0}[e], p = {flv: "flv",mp4: "mp4",hd2: "flv","3gphd": "mp4","3gp": "flv"}[e], k = a.toString(16);
        1 == k.length && (k = 
        "0" + k);
        var l = c.segs[e][a].seconds, a = c.segs[e][a].k;
        if ("" == a || -1 == a)
            a = c.key2 + c.key1;
        e = "";
        c.show && (e = c.show.show_paid ? "&ypremium=1" : "&ymovie=1");
        c = "/player/getFlvPath/sid/" + userCache.sid + "_" + k + "/st/" + p + "/fileid/" + f + "?K=" + a + "&hd=" + h + "&myp=0&ts=" + l + "&ypp=0" + e;
        f = encodeURIComponent(E(F(G("boa4poz1", [19, 1, 4, 7, 30, 14, 28, 8, 24, 17, 6, 35, 34, 16, 9, 10, 13, 22, 32, 29, 31, 21, 18, 3, 2, 23, 25, 27, 11, 20, 5, 15, 12, 0, 33, 26]).toString(), userCache.sid + "_" + f + "_" + userCache.token)));
        c = c + ("&ep=" + f) + "&ctype=12&ev=1" + 
        ("&token=" + userCache.token);
        c += "&oip=" + vdata.data[0].ip;
        return "http://k.youku.com" + (c + ((i ? "/password/" + i : "") + (g ? g : "")))
    }
};



var Promise = require('promise'),
    request = require('request');


function youku(url){
    return new Promise(function(resolve, reject){
        
        function getVid(){
           var re = url.match(/id_(.*)\.html/i);
           return re[1] && re[1]
        }

        var vid = getVid();

        function getPlayList(vid){
            return new Promise(function(resolve, reject){
                function parse(body){
                    var body = JSON.parse(body);
                    resolve(body);
                }
                var url = "http://v.youku.com/player/getPlayList/VideoIDS/"+ encodeURIComponent(vid) +"/Pf/4/ctype/12/ev/1";
                console.log(url);
                request(url, function (error, response, body) {
                    if (!error && response.statusCode == 200) {
                        parse(body)
                    }
                })
            })
        }

        function parseData(meta){
            vdata = meta;
            var videoD = meta.data[0];
            getSidToken(videoD);
            var r = new videoParse(videoD, "flv", meta);
            return r;
        }

        getPlayList(vid).then(function(meta){
            var parsed = parseData(meta);
            resolve({ meta: meta, parsed: parsed });
        }).catch(function(err){
            reject(err);
        })
    })
}


// test

// var videoUrl = "http://v.youku.com/v_show/id_XNzk2NTI0MzMy.html?x";

// youku(videoUrl).then(function(data){
//     console.log(JSON.stringify(data));
// });

module.exports = youku;