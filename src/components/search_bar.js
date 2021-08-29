import React,{Component} from 'react';

// functional based components
// ----------------------------------
// const SearchBar = () => {
//   return <input/>;
// };

// class based components-
// --------------
class SearchBar extends Component{

  constructor(props){
    super(props);
    this.state={term:''};
  }
  render(){
      return (
        <div className="search-bar">
          <input
          value={this.state.term}
           onChange={event=>this.onInputChange(event.target.value)} />
        </div>
  );
  }

// event Handler
  onInputChange(term){
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}
export default SearchBar;
