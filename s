.service-container{
    min-height: 100vh;
    width: 100%;
    background-color: var(--bg-color);
}
.service-wrapper{
    padding: 5% 8%;
}
.service{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.cards{
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: 30px;
    margin-top: 80px;
    justify-content:center;
}
.card{
    height: 330px;
    width: 370px;
    background-color: var(--second-bg-color);
    padding: 3% 8%;
    border: 0.2px solid var(--main-color);
    border-radius: 8px;
    transition: .6s;
    display: flex;
    align-items: center;
    flex-direction: column;
    position: relative;
    overflow: hidden;
}

.card::after

.card i{
    color: solid #fff;
    margin-top: 40px;
    margin-bottom: 20px;
    font-size: 4.8rem;
}

.card h2{
    color: solid white;
    font-size: 35px;
    font-weight: 600;
    letter-spacing: 1px;

}