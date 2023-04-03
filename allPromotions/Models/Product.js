class Product {
  constructor(
    code,
    name,
    brand,
    categories,
    description,
    giveAway,
    offerOnline,
    image,
    images,
    isProductAddedToWishlist,
    isProductNotified,
    isReturnable,
    isStoreOnly,
    potentialPromotions,
    margin,
    marginPercent,
    mrp,
    price,
    stock,
    tags,
    unitCode,
    url,
    variantValue,
    keyFeatures,
    itemNumber,
  ) {
    this.code = code;
    this.name=name;
    this.brand = brand;
    this.categories = categories;
    this.description = description;
    this.giveAway = giveAway;
    this.offerOnline=offerOnline,
    this.image= image;
    this.images=images;
    this.isProductAddedToWishlist=isProductAddedToWishlist;
    this.isProductNotified=isProductNotified;
    this.isReturnable=isReturnable;
    this.isStoreOnly=isStoreOnly;
    this.potentialPromotions=potentialPromotions;
    this.margin=margin;
    this.marginPercent=marginPercent;
    this.mrp=mrp;
    this.price=price;
    this.stock=stock;
    this.tags=tags;
    this.unitCode=unitCode;
    this.url=url;
    this.variantValue=variantValue;
    this.keyFeatures=keyFeatures;
    this.itemNumber=itemNumber;
  }
}
export default Product;
  