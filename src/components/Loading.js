import React from 'react'

function Loading({color}){
    return (
        <div className="loading">
                            <div id="loader" className={color}>
                            <div id="loader-inner" className={color}>
                                <div class="loader-line-wrap">
                                    <div class="loader-line"></div>
                                </div>
                                <div class="loader-line-wrap">
                                    <div class="loader-line"></div>
                                </div>
                                <div class="loader-line-wrap">
                                    <div class="loader-line"></div>
                                </div>
                                <div class="loader-line-wrap">
                                    <div class="loader-line"></div>
                                </div>
                                <div class="loader-line-wrap">
                                    <div class="loader-line"></div>
                                </div>
                            </div>
                        </div>
                        </div>
    )
}

export default Loading;