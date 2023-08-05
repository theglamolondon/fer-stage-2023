@extends('app')

@section('content')
    
<div class="container">
    <div class="row flex-lg-nowrap">
    
      <div class="col">
        <div class="e-tabs mb-3 px-3"></div>
    
        <div class="row flex-lg-nowrap">
          <div class="col mb-3">
            <div class="e-panel card">
              <div class="card-body">
                <div class="card-title">
                  <h3 class="mr-2"> Interface creation de produit</h3>
                </div>
                <div class="text-center px-xl-3">
                    <a href="#" class="btn btn-success btn-block" data-toggle="modal" data-target="#creer_produit">
                        {{ __('Nouveau Produit')}}
                    </a>
                  </div>
                <div class="e-table">
                  <div class="table-responsive table-lg mt-3">
                    <table class="table table-bordered">
                      <thead>
                        <tr>
                          <th class="max-width">Reference du produit</th>
                          <th class="max-width">Nom du produit</th>
                          <th class="sortable">quantite du produit</th>
                        </tr>
                      </thead>
                      @foreach ($produits as $produit)
                            <tbody>
                                <tr> 
                                <td class="text-nowrap align-middle"> {{$produit->ref_prod}} </td>
                                <td class="text-nowrap align-middle"> {{$produit->nom_prod}} </td>
                                <td class="text-nowrap align-middle"> {{$produit->qte_stock}} </td>              
                                </tr>
                            </tbody>
                        @endforeach
                    </table>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- User Form Modal -->
        
        <form action=" {{url('save')}}" method="post" enctype="multipart/form-data">
            @csrf
            <div class="modal fade text-left" id="creer_produit" tabindex="-1" role="dialog" aria-hidden="true">
                <div class="modal-dialog modal-lg" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title">{{ __('Creer nouveau produit') }}</h4>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>                    
                        </div>
                        <div class="modal-body">
                            <div class="col-xs-12 col-sm-12 col-md-12">
                                <div class="form-group">
                                    <strong>{{ __('Reference du Produit') }}:</strong>
                                    <input type="text" name="ref_prod" required placeholder="reference du produit" class="form-control">
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-12 col-md-12">
                                <div class="form-group">
                                    <strong>{{ __('Nom du produit') }}:</strong>
                                    <input type="text" name="nom_prod" required placeholder="nom du produit" class="form-control">
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-12 col-md-12">
                                <div class="form-group">
                                    <strong>{{ __('Quantite du produit') }}:</strong>
                                    <input type="text" name="qte_stock" required placeholder="quantite du produit" class="form-control">
                                </div>
                            </div>
                            
                            <div class="col-xs-12 col-sm-12 col-md-12">
                                <button type="submit" class="btn btn-success">{{ __('Enregistrer') }}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
        
      </div>
    </div>
    </div>

@endsection