import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actionsCreators from '../../store/actions/actions'; 
import classes from './Counter.module.css';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIcrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter} />
                <CounterControl label="Add 10" clicked={this.props.onAddCounter} />
                <CounterControl label="Subtract 15" clicked={this.props.onSubtractCounter} />
                <hr />
                <button className={classes.button} onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                <ul className={classes.ul}>
                    {this.props.storeResult.map(strResult => (
                        <li className={classes.li} 
                                key={strResult.id} onClick={() => this.props.onDeleteResult(strResult.id)}>
                            {strResult.value}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.ctr.counter,
        storeResult: state.res.results
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIcrementCounter: () => dispatch(actionsCreators.increment()),
        onDecrementCounter: () => dispatch(actionsCreators.decrement()),
        onAddCounter: () => dispatch(actionsCreators.add(10)),
        onSubtractCounter: () => dispatch(actionsCreators.subtract(15)),
        onStoreResult: (result) => dispatch(actionsCreators.storeResult(result)),
        onDeleteResult: (id) => dispatch(actionsCreators.deleteResult(id))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);