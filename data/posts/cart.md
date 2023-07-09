### 장바구니 페이지 구현

> **기획 초기 레이아웃**

![](https://velog.velcdn.com/images/cinematicmomentz/post/62c4d91f-7b89-4bac-ba05-30c8f6965878/image.png) ![](https://velog.velcdn.com/images/cinematicmomentz/post/8ffecf3c-be18-484d-a142-f4caec9c56b2/image.png)


> **최종 레이아웃**

![](https://velog.velcdn.com/images/cinematicmomentz/post/32136494-3f91-40ed-8199-fc0baf6465c9/image.png)

```
우선 초기 피그마로 레이아웃을 잡을 때에는 옆의 아트 사이트 기획 취지에 맞게 아티스트에게 직접 연락할 수 있는 폼도
같이 포함했었는데, 프로젝트가 시작되고 나서 여러가지 변수들로 인해 추가 구현 사항으로 빼놓아서 아쉬웠던 기억이다.
  
```
  
  
  

#### 1) Dropdown
  
  처음 장바구니를 계획했을 때 이솝 사이트 레이아웃을 따라가서 드롭다운 형식으로 구현했다.
  드롭다운 형식은 화면 공간을 효율적으로 활용하고 따로 페이지 이동이 필요없어, 사용자가 쉽고 편리하게 접근할 수 있다는 장점이 있다.
  
  
#### 2) GET, PATCH, DELETE methods API


처음에 메인 페이지와 장바구니 페이지 레이아웃을 대략적으로 다 잡아놓고 기능 개발부터 들어갔는데 과제에서도 다뤄봤던 내용이라 비교적 일찍 끝난 페이지였고 걱정이 별로 없었는데, 생각보다 서버와 통신 주고 받아야 할께 꽤 있었다.

장바구니 목록을 받고 또 그 안에서 수량 조절 또는 삭제를 했을 때 백엔드를 통해 데이터를 보내주고 업데이트 되는 통신이 필요했고, 원래는 +/- 부분에 fetch 를 달아 수량변화를 전달하려고 했는데 결국에는 수량 조절 옆에 확인 버튼을 새로 만들어 수량 변경 후 버튼을 클릭해서 변한 값을 보내주는 것으로 결정하였다.




1. `GET`

> 서버에 GET 메서드를 통한 회원 장바구니 목록 불러오기
기존에는 화면에 보여지기만 하는 mock data로 관리하고 이를 map을 통해 렌더링하던 cartList 컴포넌트에서 fetch 함수를 통해 서버에 데이터를 요청하였다.

- 우리가 기획한 사이트는 로그인이 되어야지만 카트에 제품을 담을 수 있어 이 과정에서 토큰이 필요해 header 부분에 local storage에 저장된 token을 전달하였다.


``` javascript
 useEffect(() => {
    fetch(`${API_ADDRESS_ORDERS}carts`, {
      method: "GET",
      headers: {
        Authorization: token,
      },
    })
      .then(res => {
        return res.json();
      })
      .then(data => {
        return setItems(data);
      });
  }, []);
```

  
  

2. `PATCH`

> 장바구니 아이템 수량을 수정하면 PATCH를 통해 서버 내부에 저장 된 데이터를 업데이트 하는 기능을 구현해보았다.

- GET, POST 만 알고 PATCH는 처음 사용해보는데, PUT 과 PATCH 가 헷갈렸었다. 그래서 찾아본 바로는 PATCH는 PUT과 비교해서 리소스의 일부를 업데이트 한다. 예를들어 수량을 변경할 때, cart data의 구조가 cart.id, cart.quantity, cart.count, cart.sum 이라고 한다면, 장바구니 수량 수정시 PATCH는 해당 부분만을 업데이트 한다.
  
  -> 이때, 변경 사항은 fetch 함수의 body 부분에 JSON.stringify()로 전달 하였다.

  </br>

``` javascript
  const handleCount = id => {
    const url = `${API_ADDRESS_ORDERS}carts/${items[id].id}`;
    fetch(url, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify({ count: items[id].count }),
    })
      .then(response => response.json())
      .then(data => data)
      .catch(error => error);
  };
```

3. `DELETE`


> 특정 아이템을 삭제버튼을 클릭 할 시 DELETE 메서드로 서버와 통신하고 이 변경사항을 다시 받아오는 로직이다.

- DELETE는 대상 아이템의 id 만을 필요로 하는데, PATCH와는 다른점이 있다면 하나의 아이템이 아니라 여러 아이템이 선택 될 수 있으므로 선택 된 모든 아이템의 cartId를 서버에 전달해야했다. -> 이렇게 전달 된 id는 쿼리파라미터 형태로 엔드포인트에 전달해주었다.


``` javascript
const deleteItem = id => {
    fetch(`${API_ADDRESS_ORDERS}carts/${items[id].id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: token,
      },
    });
    const newItems = items.filter((_, i) => i !== id);
    setItems(newItems);
  };
```




#### 3) 마우스 호버 이벤트

> patch 로 데이터를 전해주는 방법에 결제하기 버튼에서 + - 수량 옆에 확인 버튼을 만들어 사용자가 수량을 바꾼 후 수량확인 버튼을 누를 수 있도록 유도하기 위해 수량 바꾸는 부분에 밑의 이미지 처럼 마우스를 호버할때만 `수량 확인` 버튼이 나타나게 한다.

![](https://velog.velcdn.com/images/cinematicmomentz/post/ef68caf1-fd30-45df-a90c-14f902bb1748/image.png)


- onMouseEnter() 이벤트를 사용해서 구현해보려고 했는데, 문제는 카트 리스트 컴포넌트를 map 메서드를 사용해서showChangeButon 함수를 달아놓으면 제품 리스트 전체가 마우스 호버 이벤트가 생겨 어떻게 해야할지 고민했었다. 이 부분은 멘토님께서 매개변수 안에 id 값으로 해당요소를 구분하여 함수를 실행해야 한다고 알려주셨고, 덕분에 해결할 수 있었다.

``` javascript
const [showChangeButton, setShowChangeButton] = useState();
  const handleMouseEnter = id => {
    setShowChangeButton(id);
  };
  const handleMouseLeave = () => {
    setShowChangeButton(false);
  };
  

```


``` javascript
				<div
                  className="itemQuantity"
                  onMouseEnter={() => handleMouseEnter(id)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button className="minus" onClick={() => decrement(id)}>
                    -
                  </button>
                  {item.count}
                  <button className="plus" onClick={() => increment(id)}>
                    +
                  </button>
                  {showChangeButton === id && (
                    <button className="check" onClick={() => handleCount(id)}>
                      수량변경
                    </button>
                  )}
                </div>
            
```




#### 4) 조건부 렌더링으로 빈 장바구니 페이지 보여주기

> 장바구니가 비었을때, 그리고 아이템을 전부 삭제했을 때 빈 장바구니 페이지를 보여줘야했다
조건부 렌더링으로 해당 조건일때 페이지를 보여주고 빈 장바구니 알람이 일정 시간 뒤에는 다시 사라지게 구현하였다.

![](https://velog.velcdn.com/images/cinematicmomentz/post/e095d987-0bc6-4b27-bb0b-9dc53ad65c0d/image.png)

- items의 길이가 0이거나 token 값이 없을때 '카트가 비었습니다.' 라는 화면을 렌더링되게 하였다. 이제 이렇게 변한 화면을 setTimeout, clearTimeout을 활용해서 일정 시간 이후 올라가게 하였다.






#### 5) 장바구니 구현 화면

![](https://velog.velcdn.com/images/cinematicmomentz/post/917981c7-12be-456c-ab11-79609a5886a9/image.gif)


![](https://velog.velcdn.com/images/cinematicmomentz/post/224f57e4-b8bf-4b47-addc-11385de76c60/image.gif)
