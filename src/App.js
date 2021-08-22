
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './components/Home';

import FirstHooksExample from './firsthooks/FirstHooksExample'
import ContextTutorial from './firsthooks/context/ContextTutorial';
import Counter from './firsthooks/hooks/Counter';
import Input from './firsthooks/hooks/Input';
import MemoTutorial from './firsthooks/memo/MemoTutorial';
import ReducerTutorial from './firsthooks/reducer/ReducerTutorial';
import EffectTutorial from './firsthooks/useeffect/EffectTutorial';
import UseRefTutorial from './firsthooks/useRef/UseRefTutorial';

import SecondHooks from './secondhooks/SecondHooks';
import UsingState from './secondhooks/examples/UsingState';
import UsingStateEmailAndPassword from './secondhooks/examples/UsingStateEmailAndPassword';
import Fetch from './secondhooks/fetch/Fetch';


function App() {
  return (
    <div className="App">
      <Router>
          <Switch>

            <Route path='/' exact component={Home} />

            <Route path='/first-hooks-examples' exact component={FirstHooksExample} />
            <Route path='/first-hooks-examples/using-context' exact component={ContextTutorial} />
            <Route path='/first-hooks-examples/counter' exact component={Counter} />
            <Route path='/first-hooks-examples/input' exact component={Input} />
            <Route path='/first-hooks-examples/memo' exact component={MemoTutorial} />
            <Route path='/first-hooks-examples/reducer' exact component={ReducerTutorial} />
            <Route path='/first-hooks-examples/use-effect' exact component={EffectTutorial} />
            <Route path='/first-hooks-examples/use-ref' exact component={UseRefTutorial} />

            <Route path='/second-hooks-examples' exact component={SecondHooks} />
            <Route path='/second-hooks-examples/useState' exact component={UsingState} />
            <Route path='/second-hooks-examples/useStateEmailAndPassword' exact component={UsingStateEmailAndPassword} />
            <Route path='/second-hooks-examples/useFetchNumbersAPI' exact component={Fetch} />

          </Switch>
      </Router>
    </div>
  );
}

export default App;
