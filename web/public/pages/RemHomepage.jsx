import React, {Component} from 'react';
import {hashHistory} from 'react-router';
// import '../homepage.scss';

class RemHomepage extends React.Component {
    constructor() {
        super();
        this.state = {
            sourceArray: [
                {
                    newsSrc: 'https://pic.36krcnd.com/201806/05035930/o9s6wt3jjht03rbh.jpg',
                    newsTtile: '收购Github，微软的又一次大转变',
                    newsTime: '40minutes',
                    newsAuthor: 'Chinming'
                },
                {
                    newsSrc: 'https://pic.36krcnd.com/201806/05233520/zsqvyhabj4wavmpo!heading',
                    newsTtile: '抖音向左，美拍向右',
                    newsTime: '4hrs',
                    newsAuthor: 'Mark'
                },
                {
                    newsSrc: 'https://pic.36krcnd.com/201806/05122439/nu5kbn2v3m1a51qj!heading',
                    newsTtile: '最前线 | 海外直播平台BIGO LIVE获2.72亿美元D轮融资，李学凌掌舵的YY成最大股东',
                    newsTime: '5hrs',
                    newsAuthor: 'Anthony'
                },
                {
                    newsSrc: 'https://pic.36krcnd.com/201806/05111957/pievb8az9nco7xoc!heading',
                    newsTtile: 'iOS 12 值不值得升级？这里有一篇最全总结',
                    newsTime: '23hrs',
                    newsAuthor: 'Jason'
                },
                {
                    newsSrc: 'https://pic.36krcnd.com/201806/05094359/t0voi66ge85b5hcu!heading',
                    newsTtile: '如今坐拥两大专业平台的微软对硅谷意味着什么?',
                    newsTime: '2days',
                    newsAuthor: 'Emily'
                },
                {
                    newsSrc: 'https://pic.36krcnd.com/201806/04210056/7c468ke3191j0bry!heading',
                    newsTtile: '苹果WWDC2018：暗黑界面的新版macOS发布，唯一“新产品”是只表带',
                    newsTime: '3days',
                    newsAuthor: 'Andrew'
                }
            ]
        }
    }

    render() {
        return (
            <div>

                <div className="banner">
                    <img id="bannerImg" src="https://pic.36krcnd.com/201806/04160514/d05f1dgwlm3dogjk!1200"/>
                    <div id="bannerDescription">
                        开发人工智能金融搜索引擎，「虎博科技」获得过亿元 Pre-A 轮融资
                    </div>
                </div>

                <div className="header">
                    <ul className="header-content">
                        <li className="header-item">最新文章</li>
                        <li className="header-item">大公司</li>
                        <li className="header-item">区块链</li>
                        <li className="header-item">创投</li>
                    </ul>
                </div>

                <div className="newsList">
                    <ul>
                        {
                            this.state.sourceArray.map(function (item, index) {
                                return (
                                    <li className="newsContentSection" key = {index}>

                                        <div className="newsContent">
                                            <img className="newsImg"
                                                 src={item.newsSrc}/>
                                            <p className="newsTitle">{item.newsTtile.length > 25? item.newsTtile.slice(0, 26) + "..." : item.newsTtile}</p>
                                            <span className="newsTime">{item.newsTime} ago</span>
                                            <span className="newsAuthor">{item.newsAuthor}</span>
                                        </div>

                                    </li>
                                )
                            })
                        }


                    </ul>
                </div>

            </div>

        )
    }
}

export default RemHomepage;