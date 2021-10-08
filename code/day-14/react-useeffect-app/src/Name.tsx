import React, { Component, createRef, PureComponent } from 'react'

type NamePropsType = {
    nameValue: string,
    nameHandler: (arg: string) => void
}

// export default class Name extends Component<NamePropsType, {}> {
export default class Name extends PureComponent<NamePropsType, {}> {
    private childInputRef: any;
    constructor(props: NamePropsType) {
        super(props)
        console.log('[Name] created');
        this.childInputRef = createRef<HTMLInputElement>()
    }
    /*
    shouldComponentUpdate(newProps: any, currentState: any) {
        console.log('[old Props]', this.props, '[new props]', newProps);
        if (this.props.nameValue === newProps.nameValue) {
            return false
        }
        return true
        // for (const newPropName in newProps) {
        //     for (const oldPropName in this.props) {
        //         if (newProps[newPropName] !== this.props[oldPropName]) {
        //             return true;
        //         }
        //     }
        // }
        // return false;
    }
    */
    focusInput = () => {
        this.childInputRef.current.focus()
    }
    render() {
        console.log('[Name] rendered');
        console.log('[current props]', this.props);
        const { nameValue, nameHandler } = this.props
        return (
            <div>
                Name[Child]Input:&nbsp;
                <input type='text' value={nameValue} ref={this.childInputRef} onChange={
                    (event) => {
                        nameHandler(event.target.value)
                    }
                } />
            </div>
        )
    }
    componentDidUpdate(oldProps: NamePropsType, oldState: {}) {
        //fetch data
    }
    componentDidMount() {
        //fetch data
        //this.focusInput()
    }
    componentWillUnmount() {
        //clean up
    }
}
