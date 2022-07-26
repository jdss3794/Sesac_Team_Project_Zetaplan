import React from 'react';
import data from './abroadNetworkData.json';

const AbroadNetworkTable = ({num}) => {
  let itemArr = data[num].data;

  return (
    <table className='network-table'>
      <colgroup>
        <col style={{width: "25%"}}/>
        <col style={{width: "75%"}}/>
      </colgroup>
      <thead>
        <tr>
          <th>제휴기관명</th>
          <th>기관소개</th>
        </tr>
      </thead>
      <tbody>
        {
          itemArr.map((item, idx)=>{
            return (
              <tr key={idx}>
                <td>
                  {item.name}
                  {
                    item.img
                    ? <img src={item.img} alt={item.name} className="network-img" />
                    : null
                  }
                </td>
                <td>
                  <ul>
                    {item.info.map((infoEle, idx)=>{
                      return <li key={idx}>{infoEle}</li>
                    })}
                  </ul>
                </td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  );
};

export default AbroadNetworkTable;