<script>
/**
 * Invoice Detail component
 */
export default {
    head() {
        return {
            title: `${this.title} | Nuxtjs Responsive Bootstrap 5 Admin Dashboard`
        };
    },
    data() {
        return {

            clients:{
                jm:'Jason Mwale',
                tj: 'Tamara Johnson',
                op:'Onika Phiri',
                hh:'Hamududu Haivie'
            },

            inv:{
                inv1:'INV0001',
                inv2:'INV0002',
                inv3:'INV0003',
                inv4:'INV0004'
            },
            title: "Invoice Detail",
            items: [{
                    text: "Invoices"
                },
                {
                    text: "Invoice Detail",
                    active: true
                }
            ]
        };
    },
    middleware: "authentication"
};
</script>

<template>
<div>
    <PageHeader :title="title" :items="items" />

    <div class="row">
        <div class="col-lg-12">
            <div class="card">
                <div class="card-body">
                    <div class="invoice-title">
                        <h4 class="float-end font-size-16">
                            Invoice: #{{ inv.inv1}}
                            <span class="badge badge-success font-size-12 ml-2">Paid</span>
                        </h4>
                        <div class="mb-4">
                            <img src="~/assets/images/b2-logo.png" alt="logo" height="40" />
                        </div>
                        <div class="text-muted">
                            <p class="mb-1">380A Waterfalls, Lusaka ZM</p>
                            <p class="mb-1">
                                <i class="uil uil-envelope-alt mr-1"></i> kondwani@opptimus.com
                            </p>
                            <p><i class="uil uil-phone mr-1"></i> 0974928965</p>
                        </div>
                    </div>

                    <hr class="my-4" />

                    <div class="row">
                        <div class="col-sm-6">
                            <div class="text-muted">
                                <h5 class="font-size-16 mb-3">Billed To:</h5>
                                <h5 class="font-size-15 mb-2">{{clients.hh}}</h5>
                                <p class="mb-1">4450 Hancher Drive, ZM 75247</p>
                                <p class="mb-1">hamududuh@hhfarms.co.zm</p>
                                <p>096-234-5678</p>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="text-muted text-sm-right">
                                <div>
                                    <h5 class="font-size-16 mb-1">Invoice No:</h5>
                                    <p>#{{ inv.inv1}}</p>
                                </div>
                                <div class="mt-4">
                                    <h5 class="font-size-16 mb-1">Invoice Date:</h5>
                                    <p> {{ new Date() }}</p>
                                </div>
                                <div class="mt-4">
                                    <h5 class="font-size-16 mb-1">Order No:</h5>
                                    <p>#1123456</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="py-2">
                        <h5 class="font-size-15">Order summary</h5>

                        <div class="table-responsive">
                            <table class="table table-nowrap table-centered mb-0">
                                <thead>
                                    <tr>
                                        <th style="width: 70px;">No.</th>
                                        <th>Item</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th class="text-right" style="width: 120px;">Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">01</th>
                                        <td>
                                            <h5 class="font-size-15 mb-1">
                                                Nike N012 Running Shoes
                                            </h5>
                                            <ul class="list-inline mb-0">
                                                <li class="list-inline-item">
                                                    Color :
                                                    <span class="fw-medium">Gray</span>
                                                </li>
                                                <li class="list-inline-item">
                                                    Size :
                                                    <span class="fw-medium">08</span>
                                                </li>
                                            </ul>
                                        </td>
                                        <td>$260</td>
                                        <td>1</td>
                                        <td class="text-right">$260.00</td>
                                    </tr>

                                    <tr>
                                        <th scope="row">02</th>
                                        <td>
                                            <h5 class="font-size-15 mb-1">Adidas Running Shoes</h5>
                                            <ul class="list-inline mb-0">
                                                <li class="list-inline-item">
                                                    Color :
                                                    <span class="fw-medium">Black</span>
                                                </li>
                                                <li class="list-inline-item">
                                                    Size :
                                                    <span class="fw-medium">09</span>
                                                </li>
                                            </ul>
                                        </td>
                                        <td>$250</td>
                                        <td>1</td>
                                        <td class="text-right">$250.00</td>
                                    </tr>

                                    <tr>
                                        <th scope="row" colspan="4" class="text-right">
                                            Sub Total
                                        </th>
                                        <td class="text-right">$510.00</td>
                                    </tr>
                                    <tr>
                                        <th scope="row" colspan="4" class="border-0 text-right">
                                            Discount :
                                        </th>
                                        <td class="border-0 text-right">- $50.00</td>
                                    </tr>
                                    <tr>
                                        <th scope="row" colspan="4" class="border-0 text-right">
                                            Shipping Charge :
                                        </th>
                                        <td class="border-0 text-right">$25.00</td>
                                    </tr>
                                    <tr>
                                        <th scope="row" colspan="4" class="border-0 text-right">
                                            Tax
                                        </th>
                                        <td class="border-0 text-right">$13.00</td>
                                    </tr>
                                    <tr>
                                        <th scope="row" colspan="4" class="border-0 text-right">
                                            Total
                                        </th>
                                        <td class="border-0 text-right">
                                            <h4 class="m-0">$498.00</h4>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="d-print-none mt-4">
                            <div class="float-end">
                                <a href="javascript:window.print()" class="btn btn-success waves-effect waves-light mr-1">
                                    <i class="fa fa-print"></i>
                                </a>
                                <a href="#" class="btn btn-primary w-md waves-effect waves-light">Send</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- end row -->
</div>
</template>
