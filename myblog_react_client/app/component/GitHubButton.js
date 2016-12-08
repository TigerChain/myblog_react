import React from 'react' ;
import IconButton from 'material-ui/IconButton';

let iconStyles = {
  color: '#fff',
  position: 'relative',
  fontSize: '24px',
  display: 'inline-block',
  transition: 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
  fill: '#ffeecc',
  userSelect: 'none',
};

/**
 * 声明一个无状态的组件
 * @param {[type]} props [description]
 */
const GitHubButton = (props) =>{
  return(
    <IconButton iconStyle={iconStyles}
      iconClassName="muidocs-icon-custom-github"
      href="https://github.com/githubchen001"
    />
  ) ;
}

export default GitHubButton
