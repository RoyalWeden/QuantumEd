import {
    Box,
    Text,
    Button,
    Container,
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
            returned: true
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
            <Box w="100%">
                <AceEditor
                    required
                    id="input"
                    mode="python"
                    theme="monokai"
                    onChange={this.onInputChange}
                    name="UNIQUE_ID_OF_DIV"
                    value={this.state.input}
                    className=" source"
                    height="200px"
                    editorProps={{
                        $blockScrolling: true
                    }}
                />
                <Button
                    type="submit"
                    size="lg"
                    height="45px"
                    fontSize={30}
                    onClick={this.onRun}
                >
                    Run
                </Button>
                <Text>Result:</Text>
                <Textarea
                    id="output"
                    fontSize={20}
                    height="100px"
                    value={this.state.output}
                    isReadOnly
                />
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
                    height="75px"
                    editorProps={{
                        $blockScrolling: true
                    }}
                />
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