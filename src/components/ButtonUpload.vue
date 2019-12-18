<template>
<div>
<div>
<h2>OSS web直传---直接在JS签名</h2>
<ol>
<li>基于plupload封装 </li>
<li>支持html5,flash,silverlight,html4 等协议上传</li>
<li>可以运行在PC浏览器，手机浏览器，微信</li>
<li>可以选择多文件上传</li>
<li>显示上传进度条</li>
<li>可以控制上传文件的大小</li>
<li>最关键的是，让你10分钟之内就能移植到你的系统，实现以上牛逼的功能！</li>
<li>注意一点，bucket必须设置了Cors(Post打勾）,不然没有办法上传</li>
<li>注意一点，把upload.js 里面的host/accessid/accesskey改成您上传所需要的信息即可</li>
<li>此方法是直接在前端签名，有accessid/accesskey泄漏的风险, 线上生产请使用后端签名例子<a href="https://help.aliyun.com/document_detail/oss/practice/pc_web_upload/js_php_upload.html">点击查看详细文档</a></li>
</ol>
<br>
<form name=theform>
<input type="radio" name="myradio" value="local_name" checked=true/> 上传文件名字保持本地文件名字
<input type="radio" name="myradio" value="random_name" /> 上传文件名字是随机文件名
<br/>
上传到指定目录:<input type="text" id='dirname' placeholder="如果不填，默认是上传到根目录" size=50>
</form>

<h4>您所选择的文件列表：</h4>
<div id="ossfile">你的浏览器不支持flash,Silverlight或者HTML5！</div>

<br/>

<div id="container">
	<a id="selectfiles" href="javascript:void(0);" class='btn'>选择文件</a>
	<a id="postfiles" href="javascript:void(0);" class='btn'>开始上传</a>
</div>

<pre id="console"></pre>

<p>&nbsp;</p>
</div>
  <!-- <div class="upload">
    <a-upload
      name="file"
      :accept="accept"
      :action="action"
      :beforeUpload="test2"
      @change="test"
    >
      Click to Upload
    </a-upload>
  </div> -->
</div>

</template>
<script>
import Vue from 'vue';
import {Upload} from 'ant-design-vue';
Vue.use(Upload);

let accessid = "LTAI4Fd5rBAXJD1ph8ou8BD6";
let accesskey = "ZMtW6iqNtIfJt9P2pk7gpxeiUR6ELi";
let host = "http://jianghuxiami.oss-us-east-1.aliyuncs.com";

let g_dirname = "";
let g_object_name = "";
let g_object_name_type = "";
let timestamp = Date.parse(new Date()) / 1000;
let now = timestamp;
var suffix = "";
var tmp_name = '';

var policyText = {
  expiration: "2020-01-01T12:00:00.000Z", //设置该Policy的失效时间，超过这个失效时间之后，就没有办法通过这个policy上传文件了
  conditions: [
    ["content-length-range", 0, 1048576000] // 设置上传文件的大小限制
  ]
};

var policyBase64 = Base64.encode(JSON.stringify(policyText));
message = policyBase64;
var bytes = Crypto.HMAC(Crypto.SHA1, message, accesskey, { asBytes: true });
var signature = Crypto.util.bytesToBase64(bytes);

function check_object_radio() {
  var tt = document.getElementsByName("myradio");
  for (var i = 0; i < tt.length; i++) {
    if (tt[i].checked) {
      g_object_name_type = tt[i].value;
      break;
    }
  }
}

function get_dirname() {
  var dir = document.getElementById("dirname").value;
  if (dir != "" && dir.indexOf("/") != dir.length - 1) {
    dir = dir + "/";
  }
  //alert(dir)
  g_dirname = dir;
}

function random_string(len) {
  len = len || 32;
  var chars = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678";
  var maxPos = chars.length;
  var pwd = "";
  for (i = 0; i < len; i++) {
    pwd += chars.charAt(Math.floor(Math.random() * maxPos));
  }
  return pwd;
}

function get_suffix(filename) {
  var pos = filename.lastIndexOf(".");
  suffix = "";
  if (pos != -1) {
    suffix = filename.substring(pos);
  }
  return suffix;
}

function calculate_object_name(filename) {
  if (g_object_name_type == "local_name") {
    g_object_name += "${filename}";
  } else if (g_object_name_type == "random_name") {
    suffix = get_suffix(filename);
    g_object_name = g_dirname + random_string(10) + suffix;
  }
  return "";
}

function get_uploaded_object_name(filename) {
  if (g_object_name_type == "local_name") {
    tmp_name = g_object_name;
    tmp_name = tmp_name.replace("${filename}", filename);
    return tmp_name;
  } else if (g_object_name_type == "random_name") {
    return g_object_name;
  }
}

function set_upload_param(up, filename, ret) {
  g_object_name = g_dirname;
  if (filename != "") {
    suffix = get_suffix(filename);
    calculate_object_name(filename);
  }
  var new_multipart_params = {
    key: g_object_name,
    policy: policyBase64,
    OSSAccessKeyId: accessid,
    success_action_status: "200", //让服务端返回200,不然，默认会返回204
    signature: signature
  };

  up.setOption({
    url: host,
    multipart_params: new_multipart_params
  });

  up.start();
}

export default {
  mixins: [],
  props: {},
  components: {},
  data() {
    return {
      accept: "",
      //action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
      action: "http://jianghuxiami.oss-us-east-1.aliyuncs.com",
      headers: {
        authorization: "authorization-text",
        OSSAccessKeyId: "LTAI4Fd5rBAXJD1ph8ou8BD6",
        AccessKeySecret: "ZMtW6iqNtIfJt9P2pk7gpxeiUR6ELi"
        //"x-oss-security-token": ""
      },
      ossParams: {
        OSSAccessKeyId: "LTAI4Fd5rBAXJD1ph8ou8BD6",
        AccessKeySecret: "ZMtW6iqNtIfJt9P2pk7gpxeiUR6ELi"
      },
      fileList: []
    };
  },
  computed: {},
  created() {
    setTimeout(()=>{
      this.test2();
    },2000);
  },
  methods: {
    getAuthorization() {
      //Authorization = "OSS " + AccessKeyId + ":" + Signature
      // Signature = base64(hmac-sha1(AccessKeySecret,
      //             VERB + "\n"
      //             + Content-MD5 + "\n"
      //             + Content-Type + "\n"
      //             + Date + "\n"
      //             + CanonicalizedOSSHeaders
      //             + CanonicalizedResource))
    },
    // 开始上传
    beforeUpload(data) {
      console.log('data-==', data);
      const formData = new FormData();
      // formData.append("success_action_status", 200);
      // formData.append('policy', data['policy']);
      // formData.append("OSSAccessKeyId", ossParams.OSSAccessKeyId);
      // //formData.append("signature", data["signature"]);
      // // formData.append("x-oss-security-token", data["sts_token"]);
      // //formData.append("key", key);
      // formData.append("file", formData);

      formData.append('success_action_status', 200);
      formData.append('policy', data['policy']);
      formData.append('OSSAccessKeyId', this.ossParams.OSSAccessKeyId);
      formData.append('signature', data['signature']);
      //formData.append('x-oss-security-token', data['sts_token']);
      formData.append('key', key);
      formData.append('file', file);

      // formData.append("token", "aiufpaidfupipiu"); //随便写一个token示例
      this.saveFile(formData);
    },

    test(){
      console.log(1);
      set_upload_param(uploader, "", false);
    },

    test2(){
      let uploader = new plupload.Uploader({
    runtimes: "html5,flash,silverlight,html4",
    browse_button: "selectfiles",
    //multi_selection: false,
    container: document.getElementById("container"),
    flash_swf_url: "lib/plupload-2.1.2/js/Moxie.swf",
    silverlight_xap_url: "lib/plupload-2.1.2/js/Moxie.xap",
    url: "http://oss.aliyuncs.com",

    init: {
      PostInit: function() {
        document.getElementById("ossfile").innerHTML = "";
        document.getElementById("postfiles").onclick = function() {
          set_upload_param(uploader, "", false);
          return false;
        };
      },

      FilesAdded: function(up, files) {
        plupload.each(files, function(file) {
          document.getElementById("ossfile").innerHTML +=
            '<div id="' +
            file.id +
            '">' +
            file.name +
            " (" +
            plupload.formatSize(file.size) +
            ")<b></b>" +
            '<div class="progress"><div class="progress-bar" style="width: 0%"></div></div>' +
            "</div>";
        });
      },

      BeforeUpload: function(up, file) {
        check_object_radio();
        get_dirname();
        set_upload_param(up, file.name, true);
      },

      UploadProgress: function(up, file) {
        var d = document.getElementById(file.id);
        d.getElementsByTagName("b")[0].innerHTML =
          "<span>" + file.percent + "%</span>";
        var prog = d.getElementsByTagName("div")[0];
        var progBar = prog.getElementsByTagName("div")[0];
        progBar.style.width = 2 * file.percent + "px";
        progBar.setAttribute("aria-valuenow", file.percent);
      },

      FileUploaded: function(up, file, info) {
        if (info.status == 200) {
          document
            .getElementById(file.id)
            .getElementsByTagName("b")[0].innerHTML =
            "upload to oss success, object name:" +
            get_uploaded_object_name(file.name);
        } else {
          document
            .getElementById(file.id)
            .getElementsByTagName("b")[0].innerHTML = info.response;
        }
      },

      Error: function(up, err) {
        document
          .getElementById("console")
          .appendChild(document.createTextNode("\nError xml:" + err.response));
      }
    }
  });
  uploader.init();
    },
    saveFile(formData) {
      this.axios({
        method: "post",
        url: this.action,
        headers: {
          'X-xxx': 'xx'
        },
        data: formData
      })
        .then(response => {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    
    // 上传进度变化
    handleChange({ file, fileList }) {
      console.log(file, fileList);
      if (file.status == "uploading") {
        console.log(file.percent);
      } else if (file.status === "done") {
        console.log(`${file.name}上传成功`);
        // this.$message.success(`${info.file.name} file uploaded successfully`);
      } else if (file.status === "error") {
        console.log(`${file.name}上传失败`);
        //this.$message.error(`${info.file.name} file upload failed.`);
      }
    }
  }
};
</script>
<style lang="stylus" scoped></style>
