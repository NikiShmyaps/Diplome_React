export default class Service {

  getResource = async (url) => {
    const res = await fetch(`http://localhost:3001${url}`);
    if(!res.ok){
      throw new Error(`Cound not fetch ${url}, status: ${res.status}`);
    }
    return await res.json();
  }
  getBestsellers = async () => {
    return await this.getResource('/bestsellers');
  };
  getCoffee = async () => {
    return await this.getResource('/coffee');
  };
  getGoods = async () => {
    return await this.getResource('/goods');
  };
}
