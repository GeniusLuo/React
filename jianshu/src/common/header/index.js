import React, {Component} from 'react';
import {CSSTransition} from 'react-transition-group';
import {connect} from 'react-redux';
import {actionCreators} from './store';

import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoItem,
  SearchInfoList
} from "./style";

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {focused, list, handleInputFocus, handleInputBlur} = this.props

    return (
      <HeaderWrapper>
        <Logo/>
        <Nav>
          <NavItem className='left active'>首页</NavItem>
          <NavItem className='left'>下载App</NavItem>
          <NavItem className='right'>登陆</NavItem>
          <NavItem className='right'>
            <i className="iconfont">&#xe636;</i>
          </NavItem>
          <SearchWrapper>
            <CSSTransition timeout={200}
                           in={focused}
                           classNames='slide'>
              <NavSearch onFocus={() => {handleInputFocus(list)}}
                         onBlur={handleInputBlur}
                         className={focused ? 'focused' : ''}/>
            </CSSTransition>
            <i className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe617;</i>
            {
              this.getListArea()
            }
          </SearchWrapper>
        </Nav>
        <Addition>
          <Button className='writing'>
            <i className="iconfont">&#xe615;</i>
            写文章
          </Button>
          <Button className='reg'>注册</Button>
        </Addition>
      </HeaderWrapper>
    )
  }

  getListArea() {
    const {focused, list, page, mouseIn, totalPage, handleMouseEnter, handleMouseLeave, handleChangePage} = this.props
    // 将list(immutable)对象转为普通数组对象
    const newList = list.toJS();
    const pageList = [];
    if (newList.length) {
      for (let i = (page - 1) * 10; i < page * 10 ; i++) {
        if(newList[i]) {
          pageList.push(<SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>)
        }
      }
    }

    if (focused || mouseIn) {
      return (
        <SearchInfo onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}>
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch onClick={() => handleChangePage(page, totalPage, this.spinIcon)}>
              <i ref={(icon) => {
                this.spinIcon = icon
              }} className="iconfont spin">&#xe851;</i>换一批
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            {pageList}
          </SearchInfoList>
        </SearchInfo>
      )
    } else {
      return null
    }
  }
}

const mapStateToProps = (state) => {
  return {
    // immutable对象的get方法
    focused: state.getIn(['header', 'focused']),
    list: state.getIn(['header', 'list']),
    page: state.getIn(['header', 'page']),
    totalPage: state.getIn(['header', 'totalPage']),
    mouseIn: state.getIn(['header', 'mouseIn'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus(list) {
      list.size === 0 && dispatch(actionCreators.getList())
      dispatch(actionCreators.searchFocus())
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur())
    },
    handleMouseEnter() {
      dispatch(actionCreators.mouseEnter())
    },
    handleMouseLeave() {
      dispatch(actionCreators.mouseLeave())
    },
    handleChangePage(page, totalPage, spin) {
      let originAngle = spin.style.transform.replace(/[^0-9]/ig, '')
      if (originAngle) {
        originAngle = parseInt(originAngle, 10)
      } else {
        originAngle = 0
      }
      spin.style.transform = `rotate(${originAngle + 360}deg)`
      if (page < totalPage) {
        dispatch(actionCreators.changePage(page + 1))
      } else {
        dispatch(actionCreators.changePage(1))
      }

    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
