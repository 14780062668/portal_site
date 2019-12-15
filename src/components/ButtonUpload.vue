<template>
  <div class="upload">
    <a-upload
      name="file"
      :accept="accept"
      :action="action"
      :headers="headers"
      @change="handleChange"
      @beforeUpload="beforeUpload"
    >
      Click to Upload
    </a-upload>
    <!-- <a-upload
      name="file"
      action="//jsonplaceholder.typicode.com/posts/"
      @change="handleChange"
    >
      <span>Click to Upload</span>
    </a-upload> -->
  </div>
</template>
<script>
import Vue from "vue";
import { Upload } from "ant-design-vue";
Vue.use(Upload);
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
  created() {},
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
    customRequest(data) {
      const formData = new FormData();
      formData.append("success_action_status", 200);
      // formData.append('policy', data['policy']);
      formData.append("OSSAccessKeyId", ossParams.OSSAccessKeyId);
      //formData.append("signature", data["signature"]);
      // formData.append("x-oss-security-token", data["sts_token"]);
      //formData.append("key", key);
      formData.append("file", formData);

      // formData.append("token", "aiufpaidfupipiu"); //随便写一个token示例
      this.saveFile(formData);
    },
    saveFile(formData) {
      this.axios({
        method: "post",
        url: this.action,
        headers: {},
        params: {},
        data: formData
      })
        .then(response => {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    // 开始上传
    beforeUpload(item, val) {
      console.log("item==", item, val);
    },
    handleChange2(info) {
       console.log(info.file, info.fileList);
      if (info.file.status !== "uploading") {
        console.log(info);
      }
      if (info.file.status === "done") {
        this.$message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        this.$message.error(`${info.file.name} file upload failed.`);
      }
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
