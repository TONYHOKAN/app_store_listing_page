export default class AppStoreApp {
  constructor (json = {}) {
    this.id = json['id'].attributes['im:id']
    this.name = json['im:name'].label
    this.category = json['category'].attributes.label
    this.summary = json['summary'].label
    this.image = json['im:image'][0].label
    this.author = json['im:artist'].label
  }
}
