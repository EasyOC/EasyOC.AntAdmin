import * as React from 'react';
import { Editor } from 'amis-editor';

import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/css/v4-shims.css';
// import styles
import 'amis/lib/themes/default.css';
import 'amis/lib/themes/cxd.css';
import 'amis/lib/themes/antd.css';
import 'amis/lib/helper.css';
import 'amis/sdk/iconfont.css'; 
import 'amis-editor/dist/style.css';
import './styles.less';
// import { useState } from 'react';

const schema = {
  type: 'form',
    body: [
      {
        type: 'input-text',
        name: 'a',
        label: 'Text'
      }
    ]
};

const plugins = []; // 通过plugin注入

class AmisEditor extends React.Component {
  state = {
    preview: false,
    mobile: false,
    schema: schema
  };
  handleChange = value => {
    this.setState({
      schema: value
    });
  };
  togglePreview = () => {
    this.setState({
      preview: !this.state.preview
    });
  };
  handleMobile = mobileStatus => {
    this.setState({
      mobile: mobileStatus
    });
  };
  render() {
    const {preview, mobile} = this.state;
    return (
      <div className="Editor-Demo">
        <div className="Editor-header">
          <div className="Editor-title">amis 可视化编辑器</div>
          <div className="Editor-view-mode-group-container">
            <div className="Editor-view-mode-group">
              <div
                className={`Editor-view-mode-btn ${
                  !mobile ? 'is-active' : ''
                }`}
                onClick={() => {
                  this.handleMobile(false);
                }}
              >
                PC
              </div>
              <div
                className={`Editor-view-mode-btn ${
                  mobile ? 'is-active' : ''
                }`}
                onClick={() => {
                  this.handleMobile(true);
                }}
              >
                移动
              </div>
            </div>
          </div>

          <div className="Editor-header-actions">
            <div
              className={`header-action-btn margin-left-space ${
                preview ? 'primary' : ''
              }`}
              onClick={() => {
                this.togglePreview();
              }}
            >
              {preview ? '编辑' : '预览'}
            </div>
          </div>
        </div>
        <div className="Editor-inner">
          <Editor
            isMobile={mobile}
            preview={preview}
            value={this.state.schema}
            onChange={this.handleChange}
            theme="cxd"
            plugins={plugins}
          />
        </div>
      </div>
    );
  }
}

export default AmisEditor;
