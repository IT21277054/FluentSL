import { Button, Layout, Space, Switch, Tooltip } from 'antd';
import '../App.css';
import TextArea from 'antd/es/input/TextArea';
import { PaperClipOutlined, AudioOutlined } from '@ant-design/icons';
import Convert from '../components/convertor';
import axios from 'axios';
import { useState } from 'react';

const { Content } = Layout;

const AppContent = (): any => {
  const [text, setText] = useState('');

  const [value, setValue] = useState('');

  async function handleTranslate(): Promise<void> {
    const options = {
      method: 'POST',

      url: 'https://rapid-translate-multi-traduction.p.rapidapi.com/t',

      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': '844dee9b82msh71b565e662a4fadp10eb89jsn2efb46c0e5a5',
        'X-RapidAPI-Host': 'rapid-translate-multi-traduction.p.rapidapi.com',
      },

      data: {
        from: 'en',

        to: 'si',

        q: [`${text}`],
      },
    };

    try {
      const response = await axios.request(options);

      setValue(response.data);

      console.log(response.data);
    } catch (error) {
      console.error(error);
    }

    axios

      .post('http://localhost:3000/userhistory/create', {
        title: 'title',

        description: value,
      })

      .then((response) => {
        console.log(response);
      });
  }

  return (
    <>
      {/* <Convert

  language = 'uz'

  text='my name is amal'/> */}

      <Content
        className="upper-layer"
        style={{
          margin: '24px 16px',
          padding: 24,
          borderRadius: '10px',
        }}
      >
        <div style={{ marginTop: '15%' }}>
          <TextArea
            showCount
            style={{ height: 120 }}
            placeholder="Sinhala"
            onChange={(e) => setText(e.target.value)}
          />

          <br />

          <br />

          <TextArea
            showCount
            style={{ height: 120 }}
            placeholder=""
            value={value}
          />
          <br />
          <br />
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <Button
              onClick={handleTranslate}
              style={{
                width: '120px',
                backgroundColor: '#14C38E',
                color: 'black',
              }}
            >
              Translate
            </Button>
            <div
              style={{
                display: 'flex',
                justifyContent: 'flex-end',
                marginLeft: 'auto',
              }}
            >
              <Space wrap>
                <div>
                  <Tooltip title="search">
                    <Button
                      type="primary"
                      shape="rectangle"
                      icon={<PaperClipOutlined />}
                      style={{
                        marginRight: 10,
                        backgroundColor: '#14C38E',
                        width: '70px',
                        color: 'black',
                      }}
                    />

                    <Button
                      type="primary"
                      shape="rectangle"
                      icon={<AudioOutlined />}
                      style={{
                        marginRight: 0,
                        backgroundColor: '#14C38E',
                        width: '70px',
                        color: 'black',
                      }}
                    />
                  </Tooltip>
                </div>

                {/* <Switch
              checkedChildren="Spoken"
              unCheckedChildren="Written"
              defaultChecked
              style={{marginLeft: '1735%'}}
            /> */}
              </Space>
            </div>
          </div>
        </div>
      </Content>
    </>
  );
};

export default AppContent;
