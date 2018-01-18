<template>
  <div class="board-container">
    <h3 class="poster-head"><span><i class="el-icon-edit"></i></span>发表新帖</h3>
    <el-input v-model="form.name" placeholder="请在这里填写标题"></el-input>
    <quill-editor ref="myTextEditor" :content="form.content" :options="editorOption" @change="onEditorChange($event)"></quill-editor>
    <el-button type="primary">发表</el-button>
  </div>
</template>

<script>
import { quillEditor } from 'vue-quill-editor'

export default {
  data () {
    return {
      form: {
        name: '',
        content: ''
      },
      editorOption: {
        placeholder: '请在这里输入内容',
        modules: {
          toolbar: [
            // ["bold", "italic", "underline", "strike"],
            // [{ list: "ordered" }, { list: "bullet" }],
            // [{ header: [1, 2, 3, 4, 5, 6, false] }],
            // [{ color: [] }, { background: [] }],
            // [{ font: [] }],
            // [{ align: [] }],
            ['link', 'image']
            // ["clean"]
          ]
        }
      }
    }
  },
  components: {
    quillEditor // 声明组件quillEditor
  },
  methods: {
    onEditorChange ({ editor, html, text }) {
      this.content = html
    }
  },
  computed: {
    editor () {
      return this.$refs.myTextEditor.quill
    }
  },
  mounted () {
    // console.log('this is my editor', this.editor)
  }
}
</script>

<style>
.board-container {
  background-color: #ffffff;
  padding: 2em;
  margin: 2em auto 0;
  width: 80%;
  /* min-height: 20em; */
}

.quill-editor {
  margin: 1em 0;
}

.board-container .ql-container .ql-editor {
  min-height: 20em;
}

.board-container .poster-head {
  font-size: 0.9em;
}

.board-container .poster-head span {
  font-size: 0.75em;
  color: #ffffff;
  background-color: #ff7f42;
  display: inline-block;
  border-radius: 1px;
  padding: 2px;
  margin-right: 4px;
}
</style>
