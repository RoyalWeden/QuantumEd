import {
    Box,
    Text,
    Button,
    SimpleGrid,
    Textarea
} from '@chakra-ui/react'
import { Global } from '@emotion/react'
import "ace-builds"
import React, { Component, useState, useEffect } from 'react'
import AceEditor from "react-ace"

import 'ace-builds/src-noconflict/mode-python'
import 'ace-builds/src-noconflict/mode-markdown'
import 'ace-builds/src-noconflict/theme-chrome'
import 'ace-builds/src-noconflict/theme-monokai'
import 'ace-builds/src-noconflict/theme-terminal'

export default class CodeItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            input: props.input || ``,
            output: props.output || ``,
            userInput: props.userInput || ``,
            stdout: ``,
            stderr: ``,
            data: [],
            dataPromise: [],
            run: false,
            returned: true,
            inputHeight: props.inputHeight || '200px',
            resultUserInputHeight: props.ruiHeight || '150px'
        };
    }

    onRun = (e) => {
        e.preventDefault();
        this.setState({ run: true });
    }

    onInputChange = (e) => {
        this.setState({ input: e });
    }

    onUserInputChange = (e) => {
        this.setState({ userInput: e });
    }

    componentDidUpdate() {
        if(this.state.run) {
            this.setState({ returned: false });
            this.setState({ output: "Running code..." });
            fetch("https://judge0-ce.p.rapidapi.com/submissions?base64_encoded=true&wait=true", {
                "method": "POST",
                "headers": {
                    "content-type": "application/json",
                    "x-rapidapi-host": "judge0-ce.p.rapidapi.com",
                    "x-rapidapi-key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
                },
                "body": JSON.stringify({
                    "language_id": 71,
                    "source_code": Buffer.from(this.state.input).toString('base64'),
                    "stdin": Buffer.from(this.state.userInput).toString('base64')
                }),
            }).then(
                res => {
                    this.setState({...this.state, dataPromise: res.json()});
                    this.state.dataPromise.then(
                        val => {
                            this.setState({ data: val });
                            this.setState({ stdout: Buffer.from(String(this.state.data.stdout), 'base64') });
                            this.setState({ stderr: Buffer.from(String(this.state.data.stderr), 'base64') });
                            if(this.state.data.stdout) {
                                if(this.state.data.stderr) {
                                    this.setState({ output: this.state.stdout + this.state.stderr });
                                } else {
                                    this.setState({ output: this.state.stdout });
                                }
                            } else {
                                this.setState({ output: this.state.stderr });
                            }
                        }
                    )
            });
            this.setState({ run: false });
        }
    }

    render() { 
        return (
            <Box w="100%" align="center">
                <AceEditor
                    required
                    id="input"
                    mode="python"
                    theme="monokai"
                    onChange={this.onInputChange}
                    name="UNIQUE_ID_OF_DIV"
                    value={this.state.input}
                    className=" source"
                    height={this.state.inputHeight}
                    width="100%"
                    style={{zIndex: 0}}
                    editorProps={{
                        $blockScrolling: true
                    }}
                />
                <Button
                    type="submit"
                    size="lg"
                    height="55px"
                    width="125px"
                    fontSize={45}
                    onClick={this.onRun}
                >
                    Run
                </Button>
                <SimpleGrid columns={[1, 2, 2]} spacing='40px'>
                    <Box>
                        <Text>Result:</Text>
                        <Textarea
                            id="output"
                            fontSize={20}
                            height={this.state.resultUserInputHeight}
                            width="100%"
                            value={this.state.output}
                            resize='none'
                            isReadOnly
                        />
                    </Box>
                    <Box mb='2rem'>
                        <Text>User Input:</Text>
                        <AceEditor
                            required
                            id="userInput"
                            mode="markdown"
                            theme="terminal"
                            onChange={this.onUserInputChange}
                            name="UNIQUE_ID_OF_DIV"
                            value={this.state.userInput}
                            className=" source"
                            height={this.state.resultUserInputHeight}
                            width="100%"
                            style={{zIndex: 0}}
                            editorProps={{
                                $blockScrolling: true
                            }}
                        />
                    </Box>
                </SimpleGrid>
            </Box>
        )
    }
}
    
export const CodeItemStyle = () => (
    <Global styles={`
            .code-item {
                border-radius: 12px;
            }
        `}
    />
)