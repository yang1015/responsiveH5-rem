import React, {Component} from 'react';
import {hashHistory} from 'react-router';
import '../homepage.scss';

class RemHomepage extends React.Component {
    constructor() {
        super();
        this.state = {
            sourceArray: [
                {
                    newsSrc: '../public/images/1.jpg',
                    newsTtile: '收购Github，微软的又一次大转变',
                    newsTime: '40minutes',
                    newsAuthor: 'Chinming'
                },
                {
                    newsSrc: '../public/images/2.jpeg',
                    newsTtile: '抖音向左，美拍向右',
                    newsTime: '4hrs',
                    newsAuthor: 'Mark'
                },
                {
                    newsSrc: '../public/images/3.jpeg',
                    newsTtile: '最前线 | 海外直播平台BIGO LIVE获2.72亿美元D轮融资，李学凌掌舵的YY成最大股东',
                    newsTime: '5hrs',
                    newsAuthor: 'Anthony'
                },
                {
                    newsSrc: '../public/images/4.jpeg',
                    newsTtile: 'iOS 12 值不值得升级？这里有一篇最全总结',
                    newsTime: '23hrs',
                    newsAuthor: 'Jason'
                },
                {
                    newsSrc: '../public/images/5.jpeg',
                    newsTtile: '如今坐拥两大专业平台的微软对硅谷意味着什么?',
                    newsTime: '2days',
                    newsAuthor: 'Emily'
                },
                {
                    newsSrc: '../public/images/6.jpeg',
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
                    <img id="bannerImg" src="../public/images/banner.jpeg"/>
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