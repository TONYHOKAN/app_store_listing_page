export default class AppStoreAppDetail {
  constructor (json = {}) {
    this.id = json['trackId']
    this.averageUserRating = json['averageUserRating']
    this.userRatingCountForCurrentVersion = json['userRatingCountForCurrentVersion']
  }
}
