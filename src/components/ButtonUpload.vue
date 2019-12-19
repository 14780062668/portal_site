<template>
  <div>
    <div>
      <form name="theform" style="display:none;">
        <input type="radio" name="myradio" value="local_name" checked="true" />
        上传文件名字保持本地文件名字
        <input type="radio" name="myradio" value="random_name" />
        上传文件名字是随机文件名
        <br />
        上传到指定目录:<input
          type="text"
          id="dirname"
          placeholder="如果不填，默认是上传到根目录"
          size="50"
        />
      </form>
      <div id="container" class="container">
        <a id="selectfiles" href="javascript:void(0);" class="btn">选择文件</a>
      </div>
      <div class="img-box" v-if="fileList.length > 0">
        <div class="img-item" v-for="item in fileList" :key="item.id">
          <div class="file-name">
            <span>{{ item.name }} </span>
            <i class="iconfont iconclose" @click="deleteFile(item)"></i>
          </div>
          <img v-if="item.url" :src="item.url" alt="" />
          <div class="progress-box" v-else>
            <div class="progress" :style="{ width: `${item.percent}%` }"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { Upload } from "ant-design-vue";
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
var tmp_name = "";

var policyText = {
  expiration: "2030-01-01T12:00:00.000Z", //设置该Policy的失效时间，超过这个失效时间之后，就没有办法通过这个policy上传文件了
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
      fileList: [],
      progress: 0,
      fileMaxNumber: 1
    };
  },
  mounted() {
    // 初始化上传
    this.initUpload();
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
      console.log("data-==", data);
      const formData = new FormData();
      // formData.append("success_action_status", 200);
      // formData.append('policy', data['policy']);
      // formData.append("OSSAccessKeyId", ossParams.OSSAccessKeyId);
      // //formData.append("signature", data["signature"]);
      // // formData.append("x-oss-security-token", data["sts_token"]);
      // //formData.append("key", key);
      // formData.append("file", formData);

      formData.append("success_action_status", 200);
      formData.append("policy", data["policy"]);
      formData.append("OSSAccessKeyId", this.ossParams.OSSAccessKeyId);
      formData.append("signature", data["signature"]);
      //formData.append('x-oss-security-token', data['sts_token']);
      formData.append("key", key);
      formData.append("file", file);

      // formData.append("token", "aiufpaidfupipiu"); //随便写一个token示例
      this.saveFile(formData);
    },
    initUpload() {
      if (!plupload) {
        let timer = setTimeout(() => {
          this.initUpload();
          clearTimeout(timer);
        }, 1000);
      }
      let $this = this;
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
            // document.getElementById("postfiles").onclick = function() {
            //   set_upload_param(uploader, "", false);
            //   return false;
            // };
          },
          FilesAdded: (up, files) => {
            console.log("files==", files);
            for (let file of files) {
              console.log("file===", file);
              let index = this.fileList.findIndex(val => val.id === file.id);
              console.log("index==", index);
              if (index == -1) {
                file.url = "";
                this.fileList.push(file);
              }
            }
            // 开始上传
            set_upload_param(uploader, "", false);
          },
          BeforeUpload: function(up, file) {
            check_object_radio();
            get_dirname();
            set_upload_param(up, file.name, true);
          },

          UploadProgress: (up, file) => {
            console.log(file);
            let index = this.fileList.findIndex(val => val.id === file.id);
            if (index > -1) {
              this.fileList[index].percent = file.percent;
            }
            // var d = document.getElementById(file.id);
            // var prog = d.getElementsByTagName("div")[0];
            // var progBar = prog.getElementsByTagName("div")[0];
            // let percent = file.percent;
            // progBar.style.width = percent + "%";
            // progBar.innerHTML = percent + "%";
            // progBar.setAttribute("aria-valuenow", file.percent);
          },
          FileUploaded: (up, file, info) => {
            console.log(up, file, info);
            let url = `${this.action}/${file.name}`;
            console.log("url=", url);
            let index = this.fileList.findIndex(val => val.id === file.id);
            if (index > -1) {
              this.fileList[index].url = url;
              if (info.status == 200) {
                let list = this.fileList.filter(val => val.url);
                this.$emit("changeFile", list);
                this.$message.success("上传成功");
              } else {
                this.$message.warning("上传失败");
              }
            }
          },
          Error: function(up, err) {
            this.$message.warning("上传失败");
          }
        }
      });
      uploader.init();
    },
    // 删除文件
    deleteFile(item) {
      this.fileList = this.fileList.filter(val => val.id != item.id);
      let list = this.fileList.filter(val => val.url);
      this.$meit("changeFile", list);
    },
    saveFile(formData) {
      this.axios({
        method: "post",
        url: this.action,
        headers: {
          "X-xxx": "xx"
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
<style lang="stylus" scoped>
.container
  line-height 40px
  .btn
    font-size 18px
    color #1493cf
.img-box
  .img-item
    margin-bottom 20px
    .file-name
      line-height 30px
      font-size 18px
      i
        margin-left 20px
        width 30px
        cursor pointer
        color #1493cf
    img
      width 300px
    .progress-box
      width 100%
      height 40px
      background #f5f5f5
      border-radius 4px
      .progress
        background #1493cf
        height 100%
</style>
