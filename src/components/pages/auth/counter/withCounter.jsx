import React, { Component } from 'react';

function WithCounter(OriginComponent) {
    class LogicCounter extends Component {
        constructor(props) {
            super(props)
            this.state = {
                counter: 0,
                list: [],
                color: 'black',
                mycartshop: []
            }
        }
        clickCounter = () => {
            this.setState(prevState => {
                return {
                    ...prevState,
                    counter: prevState.counter + 1
                }
            })
        }
        minusCounter = () => {
            this.setState(prevState => {
                return {
                    ...prevState,
                    counter: prevState.counter - 1
                }
            })
        }
        listCounter = (newlist) => {
            this.setState(pre => {
                return {
                    list: newlist.map(item => (
                        <li key={item.name}>{item.name}</li>
                    ))
                }
            })
        }
        ColorStock = (stock) => {
            if (stock === 5) return 'green'
            else if (stock < 5) return 'red'
            else if (stock > 5) return 'blue'
            else {
                return 'black'
            }
        }
        Cartshop = (product) => {
            this.setState((pre) => {
                return {
                    ...pre,
                    mycartshop: [product, ...this.state.mycartshop]
                }
            })
            const newlist = [product, ...this.state.mycartshop]
            window.localStorage.setItem('CartShop', JSON.stringify(newlist));
        }
        render() {
            return <OriginComponent
                evenminus={this.minusCounter}
                evenplus={this.clickCounter}
                mystate={this.state.counter}
                mylist={this.state.list}
                evenlist={this.listCounter}
                myColor={this.state.color}
                color={this.ColorStock}
                itemcart={this.state.mycartshop}
                cart={this.Cartshop}
            />
        }
    }
    return LogicCounter;
}

export default WithCounter;